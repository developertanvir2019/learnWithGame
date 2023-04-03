const ContactBanner = () => {
    return (
        <div className="relative mt-6">
            <img src='images/contactImg1.png' alt="Image description" className="w-full" />
            <div className="pb-2 absolute top-28 left-24">
                <p className="text-6xl font-semibold">Say Hello</p>
                <p className="mt-10">Need a hand? Or a high five? Here’s how to reach us.</p>
            </div>
        </div>
    );
};

export default ContactBanner;