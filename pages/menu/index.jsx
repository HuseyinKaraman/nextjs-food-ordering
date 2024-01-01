import axios from "axios";
import MenuWrapper from "../../components/menu/MenuWrapper";

const Index = ({ categoryList, productList }) => {
    return <MenuWrapper categoryList={categoryList} productList={productList} />;
};

export default Index;

export const getServerSideProps = async (ctx) => {
    const categoryRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
    const productRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);

    return {
        props: {
            categoryList: categoryRes ? categoryRes.data : [],
            productList: productRes ? productRes.data : [],
        },
    };
};
