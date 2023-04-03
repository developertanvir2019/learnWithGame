import Link from "next/link";
import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { FiSearch } from 'react-icons/fi';



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Games", href: "/games" },
        { name: "Our Team", href: "/ourTeam" },
        { name: "Contact", href: "/contact" },
    ];

    const handleLinkClick = (name) => {
        setActiveLink(name);
    };

    return (
        <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex">
                            <img
                                className=" w-14"
                                src='/images/logo1.png'
                                alt=""
                            />
                            <img
                                className="w-18"
                                src='/images/logo2.png'
                                alt=""
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-16 flex items-baseline space-x-8">
                                {links.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => handleLinkClick(link.name)}
                                        className={`${activeLink === link.name
                                            ? "border-b-2 border-primary text-primary"
                                            : "text-gray-700 hover:text-primary"
                                            } px-1 py-2 text-sm font-medium`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center">
                            <div className="border-b-2 border-gray-400 flex justify-center items-center"> <FiSearch className="w-6 h-6" /> <input type="text" placeholder="Search here" className="py-1" /></div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center">
                            <a href="/login" className="btn text-white font-semibold bg-secondary">
                                Login
                            </a>
                            <a href="/signup" className="btn lg:ml-5 font-semibold btn-outline">
                                Sign up
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            {menuOpen ? (
                                <RxCross2 className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <RxHamburgerMenu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => {
                                    setMenuOpen(false);
                                    handleLinkClick(link.name);
                                }}
                                className={`${activeLink === link.name
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                    } block px-3 py-2 rounded-md text-base font-medium`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="mt-3 flex items-center px-5">
                            <a href="/login" className="btn text-white font-semibold bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium w-full">
                                Login
                            </a>
                        </div>
                        <div className="mt-3 flex items-center px-5">
                            <a href="/signup" className="btn text-white font-semibold bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium w-full">
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;