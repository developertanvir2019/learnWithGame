import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
const Footer = () => {
    return (
        <div className="bg-secondary text-white py-12">
            <div className="lg:flex justify-between px-12">
                <div className="lg:w-1/4 flex lg:justify-center">
                    <div>
                        <div className="flex mb-4">
                            <img src="/images/logo1.png" alt="" />
                            <img src="/images/logo3.png" alt="" />
                        </div>
                        <p>We work hard to protect your brand at
                            affordable rates. Our proven standardized
                            process minimizes the chances of
                            application rejection, and optimizes
                            your application for success.</p>
                    </div>
                </div>
                <div className="lg:w-1/4 flex lg:justify-center">
                    <div>
                        <h2 className="text-2xl font-semibold mb-5">Quick Links</h2>
                        <a href="#">About Us</a>
                        <a href="#">Career</a> <br />
                        <a href="#">Privacy policy</a> <br />
                        <a href="#">Cookies Policy</a> <br />
                        <a href="#">FAQ</a> <br />
                        <a href="#">Refunds</a> <br />
                        <a href="#">Accessibility Statements</a> <br />
                        <a href="#">Terms &  Condition</a>
                    </div>
                </div>
                <div className="lg:w-1/4 flex lg:justify-center">
                    <div>
                        <h2 className="text-2xl font-semibold mb-5">Contact Us</h2>
                        <h2 className="text-xl font-semibold">Mailing Address</h2>
                        <p className="mb-4">2748 Ganges PI, Davis, CA 95616.</p>
                        <h2 className="text-xl font-semibold">Mail</h2>
                        <p className="mb-4">2748 Ganges PI, Davis, CA 95616.</p>
                        <h2 className="text-xl font-semibold">Phone</h2>
                        <p className="mb-4">(530) 601-8275</p>
                    </div>
                </div>
                <div className="lg:w-1/4 flex lg:justify-center">
                    <div>
                        <h2 className="text-2xl font-semibold mb-5">Social Links</h2>
                        <div className="flex items-center text-lg my-3"><BsFacebook /><a className="ml-1" href="#">Facebook</a></div>
                        <div className="flex items-center text-lg my-3"><BsLinkedin /><a className="ml-1" href="#">LinkedIn</a></div>
                        <div className="flex items-center text-lg my-3"><BsTwitter /><a className="ml-1" href="#">Twitter</a></div>
                        <div className="flex items-center text-lg my-3"><BsInstagram /><a className="ml-1" href="#">Instagram</a></div>
                        <div className="flex items-center text-lg my-3"><BsYoutube /><a className="ml-1" href="#">Youtube</a></div>
                    </div>
                </div>
            </div>
            <p className="text-center py-12 tex-semibold">2023 | Alter Learning Inc. All rights reserved. All branding and trademarks are property of Alter Learning Inc in the United States and other countries.</p>
        </div>
    );
};

export default Footer;