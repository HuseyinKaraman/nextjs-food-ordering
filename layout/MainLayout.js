import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useState } from "react";

const MainLayout = ({ children }) => {
    const [isMenuModal, setIsMenuModal] = useState(false);

    return (
        <>
            {isMenuModal ? (
                <Header setIsMenuModal={setIsMenuModal} isMenuModal={isMenuModal} />
            ) : (
                <>
                    <Header setIsMenuModal={setIsMenuModal} isMenuModal={isMenuModal} />
                    {children}
                    <Footer />
                </>
            )}
        </>
    );
};

export default MainLayout;
