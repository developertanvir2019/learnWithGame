import Link from "next/link";
import { useState } from "react";

const GameBrowse = () => {
    const [activeLink, setActiveLink] = useState("");
    const links = [
        { name: "Virtual reality", href: "/games/#slide6" },
        { name: "Augmented reality", href: "/games/#slide7" },
        { name: "Action", href: "/games/#slide8" },
        { name: "Adventure", href: "/games/#slide9" },
        { name: "Puzzle", href: "/games/#slide9" },
        { name: "Strategy", href: "/games/#slide9" },
        { name: "Sport", href: "/games/#slide9" },
        { name: "Role playing", href: "/games/#slide9" },
    ];

    const cards = [
        { id: 1, title: 'A CELESTIAL JOURNEY', description: 'GENRE: ADVENTURE | VR', img: '/images/game/image 10.png' },
        { id: 2, title: 'GENE-X EVOLUTION', description: 'GENRE : VR〡ACTION〡PUZZLE', img: '/images/game/image 10 (1).png' },
        { id: 3, title: 'MARINE BIOLOGY', description: 'GENRE : VR〡ADVENTURE', img: '/images/game/image 10 (2).png' },
        { id: 4, title: 'MUSIC HALL', description: 'GENRE: ADVENTURE | VR', img: '/images/game/image 10 (3).png' },
        { id: 5, title: 'PAPER WEATHER', description: 'GENRE : VR〡PUZZLE', img: '/images/game/image 10 (4).png' },
        { id: 6, title: 'GREEN SCIENCE GAMES SERIES', description: 'GENRE : VR〡AR〡PUZZLE〡STRATEGY', img: '/images/game/image 10 (5).png' },
        { id: 7, title: 'HARMONY TRAIN', description: 'GENRE : VR〡PUZZLE〡STRATEGY ROLE PLAYING', img: '/images/game/image 10 (6).png' },
        { id: 8, title: 'WHITEBOARD', description: 'GENRE : VR〡PUZZLE', img: '/images/game/image 10 (7).png' },
        { id: 9, title: 'HUMAN ANATOMY', description: 'GENRE : VR〡PUZZLE', img: '/images/game/image 10 (8).png' },
    ]
    const handleLinkClick = (name) => {
        setActiveLink(name);
    };
    return (
        <div className=" mb-20">
            <p className="text-center lg:mx-28 mt-16 mb-8 text-5xl font-semibold">Brows Genres</p>
            <div className="flex justify-center lg:mx-28">
                <div className="grid lg:grid-cols-5 grid-cols-3 mx-auto">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => handleLinkClick(link.name)}
                            className={`${activeLink === link.name
                                ? "border-b-2 border-primary text-primary"
                                : "text-gray-700 hover:text-primary"
                                } px-1 mx-5 py-2 text-sm font-medium`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>


            {/* start */}

            <div className="lg:grid grid-cols-3 mt-8 gap-6 lg:mx-8">
                {
                    cards.map(card =>
                        <div className="card card-compact w-96 bg-slate-100 shadow-xl pb-3 my-5 mx-auto">
                            <figure><img src={card.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className="flex justify-between">
                                    <div>
                                        <h2 className="card-title">{card.title}</h2>
                                        <p>{card.description}</p>
                                    </div>
                                    <a className="mt-6 text-blue-800 underline font-semibold w-24" href="#">View Games</a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default GameBrowse;