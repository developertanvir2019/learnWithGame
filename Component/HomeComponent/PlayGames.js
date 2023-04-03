const PlayGames = () => {
    return (
        <div className="h-screen sm:max-w-full lg:mx-12" style={{ backgroundImage: `url("/images/HomeImg/background (1).png")`, backgroundSize: 'cover' }}>
            <div className="pl-8 pt-8">
                <h2 className="text-6xl font-semibold text-start text-white">PODCAST </h2>
                <h2 className="text-6xl font-semibold text-start text-primary "> ALTER LEARNING</h2>
            </div>
            <div className="flex justify-center items-center">
                <img className="w-56" src="/images/HomeImg/button.png" alt="" />
            </div>
            <div className="pl-8 mt-32">
                <h2 className="text-6xl font-semibold text-start text-white">EPISODE #01</h2>
            </div>

        </div>
    );
};

export default PlayGames;