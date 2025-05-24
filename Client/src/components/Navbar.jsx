import React from "react";
import "../styles/font.css";

const Navbar = () => {
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    return (
        <div className="navbar bg-base-300 font-agrandir-narrow font-bold shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a href="#experiences"
                            onClick={(e) => handleSmoothScroll(e, 'experiences')}>Expériences</a></li>
                        <li><a href="#projets"
                            onClick={(e) => handleSmoothScroll(e, 'projets')}>Projets</a></li>
                        <li><a href="#education"
                            onClick={(e) => handleSmoothScroll(e, 'education')}>Éducation</a></li>
                        <li><a href="#informations"
                            onClick={(e) => handleSmoothScroll(e, 'informations')}>Informations</a></li>
                        <li><a href="#contact"
                            onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a></li>
                    </ul>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                    <defs>
                        <clipPath id="squareClip">
                            <rect x="0" y="0" width="40" height="40" rx="20" />
                        </clipPath>
                    </defs>
                    <g clipPath="url(#squareClip)">
                        <rect x="0" y="0" width="40" height="40" fill="#000000" />
                        <g transform="translate(20 20)">
                            <g transform="scale(0.08)">
                                <g transform="translate(-128 -128)">
                                    <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM104,176a8,8,0,0,1,0,16H72a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H80v96Zm88,8a8,8,0,0,1-8,8H152a8,8,0,0,1,0-16h24V80H152a8,8,0,0,1,0-16h32a8,8,0,0,1,8,8Z" fill="#FFFFFF"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#experiences"
                        onClick={(e) => handleSmoothScroll(e, 'experiences')}>Expériences</a></li>
                    <li><a href="#projets"
                        onClick={(e) => handleSmoothScroll(e, 'projets')}>Projets</a></li>
                    <li><a href="#education"
                        onClick={(e) => handleSmoothScroll(e, 'education')}>Éducation</a></li>
                    <li><a href="#informations"
                        onClick={(e) => handleSmoothScroll(e, 'informations')}>Informations</a></li>
                    <li><a href="#contact"
                        onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a></li>
                </ul>
            </div>
            <div className="flex grow navbar-end px-2">
                <div className="flex items-stretch">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn hover:bg-primary hover:text-white hover:font-medium transition-colors duration-300 ">Obtenir mon CV</div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
                            <li><a href="./files/cv_fr donald_degbessou.pdf" target="_blank" rel="noopener noreferrer">Français</a></li>
                            <li><a href="./files/cv_en donald_degbessou.pdf" target="_blank" rel="noopener noreferrer">Anglais</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;