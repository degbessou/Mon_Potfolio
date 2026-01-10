import React from "react";
import "../styles/font.css";

const Footer = () => {

    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/donald-kenneth-degbessou-684b74149/",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
                    <path d="M41.64 3H6.59C4.673 3 3 4.378 3 6.27V41.4C3 43.305 4.673 45 6.589 45H41.63c1.926 0 3.37-1.707 3.37-3.6V6.27C45.011 4.379 43.556 3 41.64 3M16.02 38.01h-6.018V19.3h6.017zm-2.801-21.553h-.043c-1.926 0-3.173-1.434-3.173-3.228 0-1.827 1.28-3.227 3.249-3.227s3.173 1.39 3.216 3.227c0 1.794-1.248 3.228-3.25 3.228M38.01 38.009h-6.017V27.78c0-2.45-.875-4.125-3.052-4.125-1.663 0-2.648 1.125-3.086 2.22-.164.395-.208.93-.208 1.478V38.01H19.63V19.301h6.017v2.604c.876-1.247 2.244-3.042 5.426-3.042 3.95 0 6.938 2.604 6.938 8.217z" />
                </svg>
            ),
        },
        {
            name: "Email",
            href: "mailto:degbessou.ca@gmail.com?subject=Proposition%20d%27offre%20d%27emploi",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
                    <path d="M39.75 7.5H8.25A5.256 5.256 0 0 0 3 12.75v22.5a5.256 5.256 0 0 0 5.25 5.25h31.5A5.256 5.256 0 0 0 45 35.25v-22.5a5.256 5.256 0 0 0-5.25-5.25m-1.33 8.684-13.5 10.5a1.5 1.5 0 0 1-1.84 0l-13.5-10.5a1.5 1.5 0 1 1 1.84-2.368L24 23.6l12.58-9.784a1.5 1.5 0 0 1 1.84 2.368" />
                </svg>
            ),
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/deg.bessou/",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
                    <path fillRule="evenodd" d="M16 4h16a12 12 0 0 1 12 12v16a12 12 0 0 1-12 12H16A12 12 0 0 1 4 32V16A12 12 0 0 1 16 4m0 4a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V16a8 8 0 0 0-8-8zm8 26a10 10 0 1 1 0-20 10 10 0 0 1 0 20m0-4a6 6 0 1 0 0-12 6 6 0 0 0 0 12m10-14a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
                </svg>
            ),
        },
    ];

    {/*    useEffect(() => {
        document.querySelectorAll('a').forEach(link => {
            if (!link.href.startsWith(window.location.origin)) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }, []);*/}

    return (
        <footer className="relative bg-base-300 border-t border-base-300">
            <div className="max-w-screen-xl mx-auto px-4 py-6">
                <div className="flex items-start justify-between gap-4">

                    {/* LEFT : logo + texte */}
                    <aside className="flex items-start gap-3 text-left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <defs>
                                <clipPath id="squareClip">
                                    <rect x="0" y="0" width="40" height="40" rx="20" />
                                </clipPath>
                            </defs>
                            <g clipPath="url(#squareClip)">
                                <rect x="0" y="0" width="72" height="72" fill="#000000" />
                                <g transform="translate(20 20)">
                                    <g transform="scale(0.08)">
                                        <g transform="translate(-128 -128)">
                                            <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM104,176a8,8,0,0,1,0,16H72a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H80v96Zm88,8a8,8,0,0,1-8,8H152a8,8,0,0,1,0-16h24V80H152a8,8,0,0,1,0-16h32a8,8,0,0,1,8,8Z" fill="#FFFFFF"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>

                        <div className="text-sm leading-snug">
                            <p>
                                Portfolio développé par{" "}
                                <strong>DEGBESSOU DONALD</strong>
                            </p>
                            <p className="mt-1">
                                © {new Date().getFullYear()} – All rights reserved
                            </p>
                        </div>
                    </aside>

                    {/* RIGHT : réseaux sociaux */}
                    <nav className="absolute bottom-1 right-1 flex gap-4">
                        {socialLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.name}
                                className="hover:opacity-70 transition"
                            >
                                {item.svg}
                            </a>
                        ))}
                    </nav>

                </div>
            </div>
        </footer>

    )
}

export default Footer;