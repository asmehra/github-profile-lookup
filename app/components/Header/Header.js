'use client'

import { FaGithub } from "react-icons/fa";

function Header() {

    return (
        <header className="shadow-sm shadow-slate-800 py-2 dark:text-white">
            <div className="md:container md:mx-auto">
                {/* Main navigation container */}
                <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-transparent lg:flex-wrap lg:justify-start ">
                    <div className="flex w-full flex-wrap items-center justify-between px-3">
                        {/* Hamburger button for mobile view */}
                        

                        {/* Collapsible navigation container */}
                        <div
                            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                            id="navbarSupportedContent1"
                            data-twe-collapse-item>
                            {/* Logo */}
                            <a
                                className="font-medium mb-4 me-5 ms-2 mt-3 flex items-center lg:mb-0 lg:mt-0"
                                href="#">
                                <img
                                    src="/logo.png"
                                    style={{height: "35px"}}
                                    alt="Logo"
                                    loading="lazy"
                                    className="me-2"
                                />
                                GitHub Profile Lookup
                            </a>
                            {/* Left navigation links */}
                            {/* <ul
                                className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
                                data-twe-navbar-nav-ref>
                                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                                    
                                    <a
                                        className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                        href="#"
                                        data-twe-nav-link-ref
                                    >Dashboard</a>
                                </li>
                            </ul> */}
                            {/* Left links */}
                        </div>

                        {/* Right elements */}
                        
                        <a className="flex items-center" href="https://github.com/asmehra/github-user-search" target="_blank">
                            <FaGithub  className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 text-2xl me-2"/>
                            <span>View source on GitHub</span>
                        </a>

                        {/* Right elements */}
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;