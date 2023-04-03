const LetsContact = () => {
    return (
        <div className="">
            <h2 className="text-center font-semibold mt-20 mb-10 text-5xl">Contact Us</h2>
            <h4 className="text-center">Greetings traveler! Do you have a question for our team? <br />
                Please email us below, our representatives are happy to assist you!</h4>

            <div className="lg:flex justify-between mx-24 mt-11">
                <div className="lg:w-1/2">
                    <img src="/images/contactImg2.png" alt="" />
                </div>
                <div className="lg:w-1/2">
                    <form className="max-w-md mx-auto">
                        <div className="flex mb-6">
                            <input className="w-full md:w-1/2 px-3 py-2 mb-3 mr-1 rounded-md bg-gray-100 border border-gray-300" type="text" placeholder="Name" />
                            <input className="w-full md:w-1/2 px-3 py-2 mb-3 ml-1 rounded-md bg-gray-100 border border-gray-300" type="email" placeholder="Email" />
                        </div>
                        <div className="flex mb-6">
                            <input className="w-full md:w-1/2 px-3 py-2 mb-3 mr-1 rounded-md bg-gray-100 border border-gray-300" type="tel" placeholder="Phone" />
                            <input className="w-full md:w-1/2 px-3 py-2 mb-3 ml-1 rounded-md bg-gray-100 border border-gray-300" type="text" placeholder="I am Interested in" />
                        </div>
                        <textarea className="w-full px-3 py-2 mb-3 rounded-md bg-gray-100 border border-gray-300" rows="5" placeholder="Message"></textarea>
                        <button className="w-full py-2 px-4 bg-secondary text-white rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 transition duration-300 ease-in-out">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LetsContact;