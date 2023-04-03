import Link from "next/link";
import { useState } from "react";

const AboutWho = () => {
    const [activeLink, setActiveLink] = useState("");
    const links = [
        { name: "Teachers And Tutors", href: "/about/#slide6" },
        { name: "Student And Families", href: "/about/#slide7" },
        { name: "Developers And Parents", href: "/about/#slide8" },
        { name: "School District And Institute", href: "/about/#slide9" },
    ];
    const handleLinkClick = (name) => {
        setActiveLink(name);
    };
    return (
        <div className="lg:mx-28">
            <p className="text-center mt-28 text-5xl font-semibold">Who Is Alter Learning For?​</p>
            <p className="text-center my-6">Our games supplement learning materials across K-12 students helping families, educators, institutions, and school districts. Alter Learning is a growing team of professionals comprised of educators, scientists, parents, designers, games developers and artists. We have the common goal of creating meaningful content that’s fun, accessible, and educational.</p>
            <div className="flex justify-center">
                <div>
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
                <div id="slide6" className="carousel-item relative w-full">
                    <div className="h-96 w-full mx-auto flex justify-center items-end mt-16" style={{ backgroundImage: `url("/images/aboutCarousel.png")`, backgroundSize: 'cover' }}>
                        <div className="w-full text-center" style={{ backgroundImage: `url("/images/HomeImg/bg3.png")`, backgroundSize: 'cover' }}>
                            <p className="mt-3 text-white px-28">We help educators by providing educational games tailored to enhance curriculum in Science, Technology, Engineering,
                                the Arts, and Mathematics.</p>
                            <p className="my-3 text-white lg:px-28">Teacher and tutors have full access to our Learning Management Tools (LMS) for scheduling students’ classes and
                                activities.Supports remote learning for educators.
                                Supports remote learning for educators.</p>
                        </div>
                    </div>
                </div>
                <div id="slide7" className="carousel-item relative w-full">
                    <div className="h-96 w-full mx-auto flex justify-center items-end mt-16" style={{ backgroundImage: `url("/images/aboutCarousel.png")`, backgroundSize: 'cover' }}>
                        <div className="w-full text-center" style={{ backgroundImage: `url("/images/HomeImg/bg3.png")`, backgroundSize: 'cover' }}>
                            <p className="mt-3 text-white lg:px-28">We help educators by providing educational games tailored to enhance curriculum in Science, Technology, Engineering,
                                the Arts, and Mathematics.</p>
                            <p className="my-3 text-white lg:px-28">Teacher and tutors have full access to our Learning Management Tools (LMS) for scheduling students’ classes and
                                activities.Supports remote learning for educators.
                                Supports remote learning for educators.</p>
                        </div>
                    </div>
                </div>
                <div id="slide8" className="carousel-item relative w-full">
                    <div className="h-96 w-full mx-auto flex justify-center items-end mt-16" style={{ backgroundImage: `url("/images/aboutCarousel.png")`, backgroundSize: 'cover' }}>
                        <div className="w-full text-center" style={{ backgroundImage: `url("/images/HomeImg/bg3.png")`, backgroundSize: 'cover' }}>
                            <p className="mt-3 text-white lg:px-28">We help educators by providing educational games tailored to enhance curriculum in Science, Technology, Engineering,
                                the Arts, and Mathematics.</p>
                            <p className="my-3 text-white lg:px-28">Teacher and tutors have full access to our Learning Management Tools (LMS) for scheduling students’ classes and
                                activities.Supports remote learning for educators.
                                Supports remote learning for educators.</p>
                        </div>
                    </div>
                </div>
                <div id="slide9" className="carousel-item relative w-full">
                    <div className="h-96 w-full mx-auto flex justify-center items-end mt-16" style={{ backgroundImage: `url("/images/aboutCarousel.png")`, backgroundSize: 'cover' }}>
                        <div className="w-full text-center" style={{ backgroundImage: `url("/images/HomeImg/bg3.png")`, backgroundSize: 'cover' }}>
                            <p className="mt-3 text-white lg:px-28">We help educators by providing educational games tailored to enhance curriculum in Science, Technology, Engineering,
                                the Arts, and Mathematics.</p>
                            <p className="my-3 text-white lg:px-28">Teacher and tutors have full access to our Learning Management Tools (LMS) for scheduling students’ classes and
                                activities.Supports remote learning for educators.
                                Supports remote learning for educators.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:flex justify-between">
                <div className="text-center">
                    <p className="text-3xl mb-5 mt-12">When was Alter Learning created?</p>
                    <p className="text-2xl text-primary">Started In 2019</p>
                </div>
                <div className="lg:mx-16 text-center">
                    <p className="text-3xl mb-5 mt-12">Where was Alter Learning founded?</p>
                    <p className="text-2xl text-primary">Davis, California</p>
                </div>
                <div className=" text-center">
                    <p className="text-3xl mb-5 mt-12">Why Alter Learning?</p>
                    <p className="text-2xl text-primary">We’re innovating learning that’s fun!</p>
                </div>
            </div>
            <div className="divider mt-14"></div>
            <div className="flex justify-center">
                <div>
                    <p className="py-8">Discover more about the dedicated team members here at Alter Learning :</p>
                    <div className="flex justify-center mb-20"> <button className="btn bg-secondary">Learn About Our Team</button></div>
                </div>
            </div>
        </div>
    );
};

export default AboutWho;