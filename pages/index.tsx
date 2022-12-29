import Layout from 'components/Layout';
import Product from 'components/Product';
import ProductContainer from 'components/ProductContainer';

const DATA = {
  description: 'Lorem ipsum',
  thumbnailUrl: 'https://picsum.photos/id/1060/536/354',
  thumbnailAlt: 'Barista',
  rating: 4.5,
};

const HomePage = () => {
  return (
    <Layout>
      <ProductContainer>
        <Product data={DATA} />
        <Product data={DATA} />
        <Product data={DATA} />
        <Product data={DATA} />
        <Product data={DATA} />
        <Product data={DATA} />
        <Product data={DATA} />
        <Product data={DATA} />
        <Product data={DATA} />
        <Product data={DATA} />
        <Product data={DATA} />
        <Product data={DATA} />
        <Product data={DATA} />
        <Product data={DATA} />
        <Product data={DATA} />
      </ProductContainer>
    </Layout>
  );
};

export default HomePage;
