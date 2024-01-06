// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "nprogress/nprogress.css";

import MainLayout from "../layout/MainLayout";
import Router from "next/router";
import NProgress from "nprogress";

import store from "../redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";





Router.events.on("routeChangeStart", () =>NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());



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
