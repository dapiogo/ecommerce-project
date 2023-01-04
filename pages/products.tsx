import Layout from 'components/Layout';
import ProductContainer from 'components/ProductContainer';
import ProductListItem from 'components/ProductListItem';
import { InferGetStaticPropsType } from 'next';

//SSG - propsy w sposob statyczny

//to wykonuje sie w czasie budowania aplikacji

export interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products/');
  const data: StoreApiResponse[] = await res.json();

  return { props: { data } };
};

const ProductsPage = ({
  data
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <ProductContainer>
        {data.map((product) => (
          <ProductListItem key={product.id} data={product} />
        ))}
      </ProductContainer>
    </Layout>
  );
};

export default ProductsPage;
