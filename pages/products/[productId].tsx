import Layout from 'components/Layout';
import Product from 'components/Product';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { apolloClient } from 'graphql/apolloClient';
import { gql } from '@apollo/client';

export const getStaticPaths = async () => {
  interface GetProductsIdResponse {
    products: Product[];
  }

  interface Product {
    id: string;
    slug: string;
  }

  const { data } = await apolloClient.query<GetProductsIdResponse>({
    query: gql`
      query GetProductsId {
        products {
          id
          slug
        }
      }
    `
  });

  return {
    paths: data.products.map((product) => {
      return {
        params: {
          productId: `${product.id}`
        }
      };
    }),
    fallback: false
  };
};

interface ProductDetail {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  images: {
    url: string;
  }[];
}

interface GetProductByIdResponse {
  product: ProductDetail;
}

export const getStaticProps = async ({
  params
}: GetStaticPropsContext<{ productId: string }>) => {
  if (!params?.productId) {
    return { props: {}, notFound: true };
  }

  const { data } = await apolloClient.query<GetProductByIdResponse>({
    variables: { id: params?.productId },
    query: gql`
      query GetProductById($id: ID) {
        product(where: { id: $id }) {
          id
          name
          price
          description
          images {
            url
          }
        }
      }
    `
  });

  if (!data) {
    return {
      props: {},
      NotFound: true
    };
  }

  return {
    props: {
      data: {
        ...data.product,
        longDescription: await serialize(data.product.description)
      }
    }
  };
};

const ProductIdPage = ({
  data
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Brak danych</div>;
  }

  return (
    <Layout disableBanner>
      <>
        <Link href="/products">Wroc na głowna strone produktów</Link>
        <Product data={data} />
      </>
    </Layout>
  );
};

export default ProductIdPage;
