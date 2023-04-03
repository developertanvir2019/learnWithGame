const HomeAbout = () => {
    return (
        <div className="lg:mx-28 text-center my-24">
            <h2 className="text-5xl font-semibold">What is Alter Learning?​</h2>
            <p className="text-gray-600 font-semibold my-3">Educational games don’t have to be boring!</p>
            <p className="text-gray-600">Alter Learning’s game collection, designed in collaboration with cutting-edge scientists,brings the joy of discovery to students of all abilities. These games can supplement classroom or help reinforce children and teens’ knowledge and critical thinking skills. Working directly with the game developers, renowned international research scientists in many fields have infused the storylines with the wonder and passion that inspires them.</p>

            <div className="lg:flex justify-between mt-12">
                <div className="card w-96">
                    <figure className="px-10 pt-10">
                        <img src="/images/HomeImg/seience.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-start">Science</h2>
                        <p className="text-start">We create games for scientists of the future. Learn how DNA is made, discover the wonders of the universe and our planet. Explore your own human anatomy, examine the many organisms on our planet, and so much more.</p>
                    </div>
                </div>
                <div className="card w-96">
                    <figure className="px-10 pt-10">
                        <img src="/images/HomeImg/techonology.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-start">Technology</h2>
                        <p className="text-start">Are you fascinated by the ever evolving world of technology? Innovate technical solutions for today and tomorrow by enhancing your knowledge with cutting edge tools.</p>
                    </div>
                </div>
                <div className="card w-96">
                    <figure className="px-10 pt-10">
                        <img src="/images/HomeImg/engeener.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-start">Engineering</h2>
                        <p className="text-start">Do you ever find yourself wondering how gadgets work? Do you enjoy solving problems and puzzles? We need you to build up your mind and shape the world’s infrastructure to lead us into tomorrow.</p>
                    </div>
                </div>
            </div>
            {/* part 2 ########### */}
            <div className="lg:flex justify-between mt-12">
                <div className="card w-96">
                    <figure className="px-10 pt-10">
                        <img src="/images/HomeImg/vr.png" alt="Shoes" className="rounded-xl w-1/2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-center">Play on VR</h2>
                    </div>
                </div>
                <div className="card w-96">
                    <figure className="px-10 pt-10">
                        <img src="/images/HomeImg/mobile.png" alt="Shoes" className="rounded-xl w-1/2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-center">Play on Mobile</h2>
                    </div>
                </div>
                <div className="card w-96">
                    <figure className="px-10 pt-10">
                        <img src="/images/HomeImg/computer.png" alt="Shoes" className="rounded-xl w-1/2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-center">Play on Computer</h2>
                    </div>
                </div>
            </div>
            {/* play games */}
        </div>
    );
};

export default HomeAbout;