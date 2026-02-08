param(
    [Parameter(Mandatory=$true)]
    [string]$SiteUrl,
    
    [int]$TimeoutSeconds = 30,
    [int]$MaxRetries = 3
)

# Configuration
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$logFile = "monitoring-log.txt"

# Fonction pour envoyer une notification Discord
function Send-DiscordNotification {
    param([string]$Message, [string]$Status)
    
    $webhookUrl = $env:DISCORD_WEBHOOK
    if ([string]::IsNullOrEmpty($webhookUrl)) { return }
    
    $color = if ($Status -eq "DOWN") { 15158332 } else { 3066993 } # Rouge ou Vert
    
    $payload = @{
        embeds = @(
            @{
                title = "🔔 Monitoring - $Status"
                description = $Message
                color = $color
                timestamp = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffZ")
                footer = @{
                    text = "Site Monitor"
                }
            }
        )
    } | ConvertTo-Json -Depth 4
    
    try {
        Invoke-RestMethod -Uri $webhookUrl -Method Post -Body $payload -ContentType "application/json"
    } catch {
        Write-Warning "Échec envoi Discord: $_"
    }
}

# Fonction pour vérifier le site
function Test-Website {
    param([string]$Url, [int]$Timeout)
    
    $result = @{
        IsOnline = $false
        StatusCode = 0
        ResponseTime = 0
        ErrorMessage = ""
    }
    
    $stopwatch = [System.Diagnostics.Stopwatch]::StartNew()
    
    try {
        $response = Invoke-WebRequest -Uri $Url -TimeoutSec $Timeout -UseBasicParsing
        $stopwatch.Stop()
        
        $result.IsOnline = ($response.StatusCode -ge 200 -and $response.StatusCode -lt 400)
        $result.StatusCode = $response.StatusCode
        $result.ResponseTime = $stopwatch.ElapsedMilliseconds
        
    } catch {
        $stopwatch.Stop()
        $result.ErrorMessage = $_.Exception.Message
        $result.ResponseTime = $stopwatch.ElapsedMilliseconds
        
        # Récupérer le code de statut si disponible
        if ($_.Exception.Response) {
            $result.StatusCode = [int]$_.Exception.Response.StatusCode
        }
    }
    
    return $result
}

# Début du monitoring
Write-Host "======================================"
Write-Host "Site Monitoring - $timestamp"
Write-Host "URL: $SiteUrl"
Write-Host "======================================"

$attempt = 0
$lastResult = $null

# Tentatives multiples en cas d'échec
while ($attempt -lt $MaxRetries) {
    $attempt++
    Write-Host "`nTentative $attempt/$MaxRetries..."
    
    $result = Test-Website -Url $SiteUrl -Timeout $TimeoutSeconds
    
    if ($result.IsOnline) {
        Write-Host "✅ Site DISPONIBLE" -ForegroundColor Green
        Write-Host "   Status Code: $($result.StatusCode)"
        Write-Host "   Temps de réponse: $($result.ResponseTime)ms"
        
        $logMessage = "[$timestamp] ✅ UP - Status: $($result.StatusCode) - Response: $($result.ResponseTime)ms"
        Add-Content -Path $logFile -Value $logMessage
        
        # Envoyer notification à chaque vérification
        $message = "Site accessible: $SiteUrl`nStatus: $($result.StatusCode)`nTemps de réponse: $($result.ResponseTime)ms"
        Send-SlackNotification -Message $message -Status "UP"
        
        exit 0
    } else {
        Write-Host "❌ Site INDISPONIBLE" -ForegroundColor Red
        if ($result.StatusCode -gt 0) {
            Write-Host "   Status Code: $($result.StatusCode)"
        }
        if ($result.ErrorMessage) {
            Write-Host "   Erreur: $($result.ErrorMessage)"
        }
        
        $lastResult = $result
        
        if ($attempt -lt $MaxRetries) {
            Write-Host "   Nouvelle tentative dans 10 secondes..."
            Start-Sleep -Seconds 10
        }
    }
}

# Toutes les tentatives ont échoué
Write-Host "`n❌ ALERTE: Site indisponible après $MaxRetries tentatives" -ForegroundColor Red

$errorDetails = if ($lastResult.StatusCode -gt 0) {
    "Status Code: $($lastResult.StatusCode)"
} else {
    "Erreur: $($lastResult.ErrorMessage)"
}

$logMessage = "[$timestamp] ❌ DOWN - $errorDetails"
Add-Content -Path $logFile -Value $logMessage

# Envoi des notifications
$message = "⚠️ Site indisponible: $SiteUrl`n$errorDetails`nTentatives: $MaxRetries"
Send-SlackNotification -Message $message -Status "DOWN"

# Échec du workflow pour déclencher les notifications GitHub
exit 1
