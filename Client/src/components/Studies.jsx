import React from "react";
import "../styles/font.css";

const Studies = () => {
    const members = [
        {
            company_icon: <svg className="w-8 h-8" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_715_1824)">
                    <path d="M34.6588 17.9031C34.6588 16.7135 34.5623 15.5175 34.3565 14.3472H17.85V21.0861H27.3025C26.9103 23.2595 25.6499 25.1822 23.8044 26.4039V30.7765H29.4438C32.7554 27.7286 34.6588 23.2274 34.6588 17.9031Z" fill="#4285F4" />
                    <path d="M17.85 35.0011C22.5698 35.0011 26.5502 33.4514 29.4502 30.7764L23.8109 26.4038C22.2419 27.4712 20.2163 28.0757 17.8564 28.0757C13.2909 28.0757 9.41989 24.9956 8.03095 20.8545H2.21155V25.3621C5.18234 31.2715 11.2332 35.0011 17.85 35.0011Z" fill="#34A853" />
                    <path d="M8.02451 20.8547C7.29146 18.6813 7.29146 16.3278 8.02451 14.1544V9.64673H2.21154C-0.270546 14.5916 -0.270546 20.4174 2.21154 25.3623L8.02451 20.8547Z" fill="#FBBC04" />
                    <path d="M17.85 6.92659C20.3449 6.88801 22.7563 7.82683 24.5632 9.55014L29.5595 4.55382C26.3958 1.58303 22.1968 -0.0502629 17.85 0.0011793C11.2332 0.0011793 5.18234 3.73074 2.21155 9.6466L8.02452 14.1542C9.40703 10.0067 13.2845 6.92659 17.85 6.92659Z" fill="#EA4335" />
                </g>
                <defs>
                    <clipPath id="clip0_715_1824">
                        <rect width="35" height="35" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            ,
            company_name: "Google",
            job_title: "Full stack engineer",
            job_description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            job_type: "Full-time",
            location: "Remotely",
            path: "javascript:void(0)"
        },
    ]
    return (
        <div>
            <div className="flex justify-center mt-8">
                <div className="badge badge-outline badge-color-secondary">
                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></circle><path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></path><circle cx="12" cy="7.25" r="1.25" fill="currentColor" strokeWidth="2"></circle></g></svg>
                    Mes études
                </div>
            </div>
            <section className="py-12">
                <div className="max-w-screen-lg mx-auto px-4 md:px-8">
                    <div className="max-w-md">
                        <h1 className="text-gray-800 text-xl sm:text-2xl">Formations</h1>
                    </div>
                    <ul className="mt-12 divide-y space-y-3">
                        <li className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50">
                            <a className="space-y-3">
                                <div className="flex items-center gap-x-3">
                                    <div className="bg-white w-14 h-14 border rounded-full flex items-center justify-center">
                                        icon
                                    </div>
                                    <div>
                                        <span className="block text-sm text-indigo-600 font-medium">Université du Québec en Outaouais</span>
                                        <h3 className="text-base text-gray-800 font-semibold mt-1">
                                            Baccalauréat, Informatique</h3>
                                    </div>
                                </div>
                                <p className="text-gray-600 sm:text-sm">
                                    janvier 2020 - avril 2023
                                </p>
                                <div className="text-sm text-gray-600 flex items-center gap-6">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 6V5C6 3.34315 7.34315 2 9 2H11C12.6569 2 14 3.34315 14 5V6H16C17.1046 6 18 6.89543 18 8V11.5708C15.5096 12.4947 12.8149 12.9999 10 12.9999C7.18514 12.9999 4.49037 12.4947 2 11.5707V8C2 6.89543 2.89543 6 4 6H6ZM8 5C8 4.44772 8.44772 4 9 4H11C11.5523 4 12 4.44772 12 5V6H8V5ZM9 10C9 9.44772 9.44772 9 10 9H10.01C10.5623 9 11.01 9.44772 11.01 10C11.01 10.5523 10.5623 11 10.01 11H10C9.44772 11 9 10.5523 9 10Z" fill="#9CA3AF" />
                                            <path d="M2 13.6923V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V13.6923C15.4872 14.5404 12.7964 14.9999 10 14.9999C7.20363 14.9999 4.51279 14.5404 2 13.6923Z" fill="#9CA3AF" />
                                        </svg>
                                        janvier 2020 - avril 2023
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z" fill="#9CA3AF" />
                                        </svg>
                                        Gatineau, Québec
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="max-w-screen-lg mx-auto px-4 md:px-8">
                    <div className="max-w-md">
                        <h1 className="text-gray-800 text-xl sm:text-2xl">Certifications</h1>
                    </div>
                    <ul className="mt-12 divide-y space-y-3">
                        {
                            members.map((item, idx) => (
                                <li key={idx} className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50">
                                    <a href={item.path} className="space-y-3">
                                        <div className="flex items-center gap-x-3">
                                            <div className="bg-white w-14 h-14 border rounded-full flex items-center justify-center">
                                                {item.company_icon}
                                            </div>
                                            <div>
                                                <span className="block text-sm text-indigo-600 font-medium">{item.company_name}</span>
                                                <h3 className="text-base text-gray-800 font-semibold mt-1">{item.job_title}</h3>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 sm:text-sm">
                                            {item.job_description}
                                        </p>
                                        <div className="text-sm text-gray-600 flex items-center gap-6">
                                            <span className="flex items-center gap-2">
                                                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 6V5C6 3.34315 7.34315 2 9 2H11C12.6569 2 14 3.34315 14 5V6H16C17.1046 6 18 6.89543 18 8V11.5708C15.5096 12.4947 12.8149 12.9999 10 12.9999C7.18514 12.9999 4.49037 12.4947 2 11.5707V8C2 6.89543 2.89543 6 4 6H6ZM8 5C8 4.44772 8.44772 4 9 4H11C11.5523 4 12 4.44772 12 5V6H8V5ZM9 10C9 9.44772 9.44772 9 10 9H10.01C10.5623 9 11.01 9.44772 11.01 10C11.01 10.5523 10.5623 11 10.01 11H10C9.44772 11 9 10.5523 9 10Z" fill="#9CA3AF" />
                                                    <path d="M2 13.6923V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V13.6923C15.4872 14.5404 12.7964 14.9999 10 14.9999C7.20363 14.9999 4.51279 14.5404 2 13.6923Z" fill="#9CA3AF" />
                                                </svg>
                                                {item.job_type}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z" fill="#9CA3AF" />
                                                </svg>

                                                {item.location}
                                            </span>
                                        </div>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Studies;