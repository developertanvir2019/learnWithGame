const GameBanner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/images/game/gameBanner.png" className="lg:w-1/2" />
                <div className="lg:w-1/2 lg:ml-8">
                    <p className="py-6 text-5xl leading-tight">
                        <span className="text-primary">Educational games</span> <br />
                        don’t have to be boring!
                    </p>
                    <p className="font-semibold mb-4">Alter Learning’s game collection, designed in consultation with cutting-edge scientists,
                        brings the joy of discovery to students of all abilities. Some games are specially designed
                        for children on the autism spectrum or with other learning differences.</p>
                    <button className="btn bg-secondary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default GameBanner;