import React from "react";
import "../styles/font.css";
import Card from "../assets/Cards";

const Studies = () => {
    const cardsData = [
        {
            icon: (<svg width="44" height="44" viewBox="0 -23 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                <g>
                    <path d="M251.69966,119.287023 C250.801236,118.566234 249.790082,118.081154 248.690111,117.872774 C242.192764,124.349625 234.264086,131.171499 227.223585,135.755852 C223.974912,137.914802 219.889302,138.994277 217.183783,138.994277 C210.956304,138.994277 208.250784,133.057164 207.437762,123.618588 C206.35487,110.941587 205.623833,95.7571967 205.623833,72.2888595 C205.623833,48.2192956 200.161552,31.8563647 185.609133,30.5719259 C184.994243,30.5172689 184.372519,30.4796922 183.723468,30.4796922 C174.790469,30.4796922 170.458904,35.0640458 164.774578,46.6649879 C159.903275,56.6433013 152.323038,71.2093844 138.248866,98.7223375 C126.067194,122.460543 112.532762,143.500061 100.890827,158.066145 C97.6489853,162.103928 95.0869396,164.87777 92.6786168,166.45599 C91.0696522,167.514969 89.5255928,168.044458 87.8995479,168.044458 C83.3049462,168.044458 79.9503746,164.16723 78.8299067,155.138581 C78.5634539,152.993295 78.4233954,150.557643 78.4233954,147.814547 C78.4233954,129.203847 85.4638966,98.9922062 97.6421531,54.4843509 C106.575152,22.1171755 102.786741,0.00159833507 83.294698,0.00159833507 C83.2639535,0.00159833507 83.233209,0.00159833507 83.2024643,0.00159833507 C83.1614716,0.00159833507 83.1204789,0.00159833507 83.0760702,0.00159833507 L83.0624059,0.0050143958 C78.6488554,0.0562553068 74.9902544,1.65497173 71.4648797,4.42881304 C67.994162,7.16166163 64.5200282,13.0646146 61.2781866,21.0001237 C57.6230016,29.9399546 35.3981105,74.5195472 0.0248016023,97.4857234 C-0.391957807,106.217175 4.55108208,114.94521 14.5669721,115.891459 C23.6844383,116.755722 30.1578733,112.912654 38.4930615,107.31373 C37.8679224,110.09782 37.2906081,112.700858 36.7645348,115.081852 C36.1428117,117.89327 35.6133224,120.318673 35.1897308,122.276076 C34.5543435,125.189976 34.1512483,127.065393 34.0316862,127.584635 C32.8736417,132.896609 32.046955,137.94213 31.5106333,142.731448 C26.5231847,187.314456 47.1869361,209.313887 71.3863103,209.313887 C75.4309262,209.313887 79.4379655,208.832224 83.4176762,207.82107 C110.08003,201.060685 135.748311,170.476694 166.130755,100.071681 C165.669587,107.73049 165.621761,114.883721 165.95312,121.521127 C167.954931,161.871636 183.914767,173.978156 206.464183,173.978156 C223.517159,173.978156 239.487243,165.079318 247.607219,154.018112 C253.564829,146.195334 256.00048,137.562947 256.00048,130.819644 C256.00048,125.586239 254.340275,121.408397 251.69966,119.287023" fill="#EA5252">
                    </path>
                </g>
            </svg>),
            title: "Baccalauréat Sc. Informatique",
            school: "Université du Québec en Outaouais",
            description: "J'ai été formé pour devenir développeur, acquérant des compétences en programmation, génie logiciel, gestion de bases de données, analyse statistique et traitement de données.",
            date: "2020-2023",
            location: "Gatineau, Québec",
            status: "Terminé"
        }, {
            icon: (
                <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="17" y="17" width="10" height="10" fill="#FEBA08" />
                    <rect x="5" y="17" width="10" height="10" fill="#05A6F0" />
                    <rect x="17" y="5" width="10" height="10" fill="#80BC06" />
                    <rect x="5" y="5" width="10" height="10" fill="#F25325" />
                </svg>
            ),
            title: "Power BI Data Analyst Associate",
            school: "Microsoft",
            description: "Ce certificat a pour but d'acquérir des méthodes et des bonnes pratiques en lien avec les exigences techniques pour modéliser, visualiser et analyser des données avec Microsoft Power BI.",
            date: "2025",
            location: "Québec ville, Québec",
            status: "En cours"
        }, {
            icon: (
                <svg width="42" height="42" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#EA1B22" fill-rule="evenodd" d="M.1 8c0 2.761 2.237 5 4.997 5h5.806A4.999 4.999 0 0015.9 8c0-2.761-2.237-5-4.997-5H5.097A4.999 4.999 0 00.1 8zm13.911 0a3.235 3.235 0 01-3.234 3.237h-5.55A3.235 3.235 0 011.991 8a3.235 3.235 0 013.234-3.236h5.551A3.235 3.235 0 0114.011 8z" clip-rule="evenodd" /></svg>
            ),
            title: "Oracle Database SQL Associate",
            school: "Oracle",
            description: "Ce certificat a pour but de devenir un associé certifié Oracle Database SQL, maîtrisant les concepts fondamentaux de SQL pour travailler sur des projets de bases de données diverses.",
            date: "2024",
            location: "Québec ville, Québec",
            status: "En cours"
        }
    ]
    return (
        <div>
            <div className="flex justify-center mt-8">
                <div className="badge badge-outline badge-color-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="14" height="14"><g xmlns="http://www.w3.org/2000/svg" transform="scale(.09375)"><path d="M256 368a16 16 0 0 1-7.94-2.11L108 285.84a8 8 0 0 0-12 6.94V368a16 16 0 0 0 8.23 14l144 80a16 16 0 0 0 15.54 0l144-80a16 16 0 0 0 8.23-14v-75.22a8 8 0 0 0-12-6.94l-140.06 80.05A16 16 0 0 1 256 368"></path><path d="M495.92 190.5v-.11a16 16 0 0 0-8-12.28l-224-128a16 16 0 0 0-15.88 0l-224 128a16 16 0 0 0 0 27.78l224 128a16 16 0 0 0 15.88 0L461 221.28a2 2 0 0 1 3 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 0 0 496 368V192a15 15 0 0 0-.08-1.5"></path></g></svg>                    Mes études
                </div>
            </div>
            <div className="grid grid-cols-3 flex flex-col gap-6 md:flex-row md:flex-wrap mx-24 mt-4">
                {cardsData.map((item, idx) => (
                    <Card
                        key={idx}
                        icon={item.icon}
                        title={item.title}
                        school={item.school}
                        description={item.description}
                        date={item.date}
                        location={item.location}
                        status={item.status}
                    />
                ))}
            </div>
        </div>
    )
}

export default Studies;