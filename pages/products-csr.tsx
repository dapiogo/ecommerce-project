import { gql, useQuery } from '@apollo/client';
import Layout from 'components/Layout';
import ProductContainer from 'components/ProductContainer';
import ProductListItem from 'components/ProductListItem';

interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  images: {
    url: string;
  }[];
}

interface GetProductsListResponse {
  products: Product[];
}

const ProductsCrsPage = () => {
  const { loading, error, data } = useQuery<GetProductsListResponse>(gql`
    query GetProductsList {
      products {
        id
        slug
        name
        price
        images(first: 1) {
          url
        }
      }
    }
  `);

  if (loading) return <div>Loading...</div>;

  if (!data || error) return <div>Cos poszlo nie tak</div>;

  return (
    <Layout>
      <ProductContainer>
        {data.products.map((product) => (
          <ProductListItem key={product.id} data={product} />
        ))}
      </ProductContainer>
    </Layout>
  );
};

export default ProductsCrsPage;
