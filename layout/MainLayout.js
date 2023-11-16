import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
