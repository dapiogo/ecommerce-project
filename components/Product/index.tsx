import LinkMarkdown from 'components/LinkMarkDown';
import Rating from 'components/Rating';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

export interface ProductDetails {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  longDescription: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductProps {
  data: ProductDetails;
}

const Product = ({ data }: ProductProps) => {
  const { image, title, rating, description, longDescription, id } = data;
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`https://next-ecommerce-xi-roan.vercel.app/products/${id}`}
        openGraph={{
          url: `https://next-ecommerce-xi-roan.vercel.app/products/${id}`,
          title: title,
          description: description,
          images: [
            {
              url: data.image,
              alt: title,
              type: 'image/jpeg'
            }
          ],
          siteName: 'Ecommerce'
        }}
      />
      <div className="relative  overflow-hidden group flex flex-col pt-4 bg-white">
        <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
          className="max-w-[500px]"
        />
        <div className="relative p-6   h-full flex flex-col justify-between">
          <Rating rating={rating.rate} />
          <h3 className="mt-4 text-lg font-medium text-gray-900 truncate">
            {title}
          </h3>
          <p className="mt-4">{description}</p>
          <article className="prose lg:prose-xl">
            <LinkMarkdown>{longDescription}</LinkMarkdown>
          </article>
          <form className="mt-4">
            <button className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
              Add to Cart
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Product;
