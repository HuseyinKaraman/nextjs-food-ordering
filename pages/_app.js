// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import MainLayout from "../layout/MainLayout";

import store from "../redux/store";
import { Provider } from "react-redux";

// ** const router = useRouter(); admin layout eklersek bunu kullanabiliriz!

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </Provider>
    );
}
