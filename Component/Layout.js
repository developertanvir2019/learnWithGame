import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;