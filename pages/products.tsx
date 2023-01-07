import Layout from 'components/Layout';
import ProductContainer from 'components/ProductContainer';
import ProductListItem from 'components/ProductListItem';
import { gql } from '@apollo/client';
import { InferGetStaticPropsType } from 'next';
import { apolloClient } from 'graphql/apolloClient';

//SSG - propsy w sposob statyczny

//to wykonuje sie w czasie budowania aplikacji

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  images: {
    url: string;
  }[];
}

export interface GetProductsListResponse {
  products: Product[];
}

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetProductsListResponse>({
    query: gql`
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
    `
  });

  return { props: { data } };
};

const ProductsPage = ({
  data
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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

export default ProductsPage;
