import axios from 'axios';
import MenuWrapper from '../../components/menu/MenuWrapper'

const Index = ({categories}) => {
  return (
    <MenuWrapper categories={categories}/>
  )
}

export default Index;


export const getServerSideProps = async (ctx) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);

  return {
      props: {
          categories: res ? res.data : [],
      },
  };
};
