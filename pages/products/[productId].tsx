import Layout from 'components/Layout';
import Product from 'components/Product';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MarkdownResult } from 'utils';

export interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  longDescription: MarkdownResult;
  rating: {
    rate: number;
    count: number;
  };
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://naszsklep-api.vercel.app/api/products/`);
  const data: StoreApiResponse[] = await res.json();

  return {
    paths: data.map((product) => {
      return {
        params: {
          productId: `${product.id}`
        }
      };
    }),
    fallback: false
  };
};

export const getStaticProps = async ({
  params
}: GetStaticPropsContext<{ productId: string }>) => {
  if (!params?.productId) {
    return { props: {}, notFound: true };
  }

  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${params?.productId}`
  );
  const data: StoreApiResponse | null = await res.json();

  if (!data) {
    return {
      props: {},
      NotFound: true
    };
  }

  return {
    props: {
      data: { ...data, longDescription: await serialize(data.longDescription) }
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
