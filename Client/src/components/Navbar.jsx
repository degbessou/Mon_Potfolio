import React from "react";
import "../styles/font.css";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 font-agrandir-narrow font-bold shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>À propos</a></li>
                        <li><a>Expériences</a></li>
                        <li><a>Projets</a></li>
                        <li><a>Éducation</a></li>
                        <li><a>Contact</a></li>
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
                    <li><a>À propos</a></li>
                    <li><a>Expériences</a></li>
                    <li><a>Projets</a></li>
                    <li><a>Éducation</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Obtenir mon CV</a>
            </div>
        </div>
    );
}
export default Navbar;