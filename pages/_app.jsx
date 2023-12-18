// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import MainLayout from "../layout/MainLayout";

import store from "../redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// ** const router = useRouter(); admin layout eklersek bunu kullanabiliriz!

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <MainLayout>
                    <ToastContainer />
                    <Component {...pageProps} />
                </MainLayout>
            </Provider>
        </SessionProvider>
    );
}
