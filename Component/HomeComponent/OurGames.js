import Link from "next/link";
import { useState } from "react";

const OurGames = () => {
    const [activeLink, setActiveLink] = useState("");
    const links = [
        { name: "A Celestial Journey", href: "/#slide1" },
        { name: "Gene-X Evolution", href: "/#slide2" },
        { name: "Marine Biology", href: "/#slide3" },
        { name: "Music Hall", href: "/#slide4" },
        { name: "Paper weather", href: "/#slide5" },
    ];
    const handleLinkClick = (name) => {
        setActiveLink(name);
    };

    return (
        <div className="mb-20">
            <p className="text-center mt-28 text-5xl font-semibold">Our Games​</p>
            <p className="text-center my-6">Educational games built to enhance student's learning experiences!​</p>
            <div className="flex justify-center">
                <div className="grid lg:grid-cols-5 grid-cols-3">
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

            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="h-96 w-3/4 mx-auto flex justify-center items-center mt-16" style={{ backgroundImage: `url("/images/HomeImg/bg2.png")`, backgroundSize: 'cover' }}>
                        <div className="" style={{ backgroundImage: `url("/images/HomeImg/bg3.png")`, backgroundSize: 'cover' }}>
                            <h2 className="text-4xl font-semibold text-white p-3">Play the demo now</h2>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="h-96 w-3/4 mx-auto flex justify-center items-center mt-16" style={{ backgroundImage: `url("/images/HomeImg/image5.png")`, backgroundSize: 'cover' }}>
                        <div className="" style={{ backgroundImage: `url("/images/HomeImg/bg3.png")`, backgroundSize: 'cover' }}>
                            <h2 className="text-4xl font-semibold text-white p-3">Play the demo now</h2>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="h-96 w-3/4 mx-auto flex justify-center items-center mt-16" style={{ backgroundImage: `url("/images/HomeImg/image6.png")`, backgroundSize: 'cover' }}>
                        <div className="" style={{ backgroundImage: `url("/images/HomeImg/bg3.png")`, backgroundSize: 'cover' }}>
                            <h2 className="text-4xl font-semibold text-white p-3">Play the demo now</h2>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="h-96 w-3/4 mx-auto flex justify-center items-center mt-16" style={{ backgroundImage: `url("/images/HomeImg/image7.png")`, backgroundSize: 'cover' }}>
                        <div className="" style={{ backgroundImage: `url("/images/HomeImg/bg3.png")`, backgroundSize: 'cover' }}>
                            <h2 className="text-4xl font-semibold text-white p-3">Play the demo now</h2>
                        </div>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <div className="h-96 w-3/4 mx-auto flex justify-center items-center mt-16" style={{ backgroundImage: `url("/images/HomeImg/image8.png")`, backgroundSize: 'cover' }}>
                        <div className="" style={{ backgroundImage: `url("/images/HomeImg/bg3.png")`, backgroundSize: 'cover' }}>
                            <h2 className="text-4xl font-semibold text-white p-3">Play the demo now</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurGames;