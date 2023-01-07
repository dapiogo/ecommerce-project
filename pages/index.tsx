import { useQuery, gql } from '@apollo/client';
import Layout from 'components/Layout';

const HomePage = () => {
  const { loading, error, data } = useQuery(gql`
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

  if (loading) return <Layout>loading</Layout>;

  if (error) return <Layout>{JSON.stringify(error)}</Layout>;

  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  );
};

export default HomePage;
