const AboutBanner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/images/AboutBanner.png" className="lg:w-1/2" />
                <div className="lg:w-1/2 lg:ml-8">
                    <p className="py-6 text-5xl leading-tight">what is alter learning?<br />
                        <span className="text-primary">
                            We build educational<br />
                            Video games.</span></p>
                    <p className="font-semibold mb-4">We innovate learning using XR(Extended Reality). XR is a combo of AR (Agumented Reality) and VR (Virtual Reality) We’re a secure, cloud based platform supporting students and educators in both online and face-to-face classes.</p>
                    <button className="btn bg-secondary">Take Me The Game Library</button>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;