import { useQuery } from '@tanstack/react-query';
import Layout from 'components/Layout';
import ProductContainer from 'components/ProductContainer';
import ProductListItem from 'components/ProductListItem';

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

export const getProducts = async () => {
  const res = await fetch(`https://naszsklep-api.vercel.app/api/products/`);
  const data: StoreApiResponse[] = await res.json();

  return data;
};

const ProductsCrsPage = () => {
  const { data, error, isLoading } = useQuery(['products'], getProducts);

  if (isLoading) return <div>Loading...</div>;

  if (!data || error) return <div>Cos poszlo nie tak</div>;

  console.log(data.length);

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

export default ProductsCrsPage;
