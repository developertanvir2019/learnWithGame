const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/images/bannerImg.png" className="lg:w-1/2" />
                <div className="lg:w-1/2 lg:ml-8">
                    <p className="py-6 text-5xl leading-tight">Empowering Future Game <br />
                        Changers with <span className="text-primary"> Real  <br />
                            World Experience</span></p>
                    <p className="font-semibold mb-4">Science based, educational games built for children, teachers,
                        parents and the scientists of the future.</p>
                    <button className="btn bg-secondary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;