import Rating from 'components/Rating';
import Link from 'next/link';

interface ProductProps {
  data: {
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
  };
}

const Product = ({ data }: ProductProps) => {
  const { description, thumbnailUrl, thumbnailAlt, rating } = data;
  return (
    <Link
      href="/#"
      className="relative block overflow-hidden group max-w-[360px] rounded-xl border border-gray-700"
    >
      <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <img
        src={thumbnailUrl}
        alt={thumbnailAlt}
        className="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative p-6 border border-gray-800 bg-gray-900 text-white">
        <Rating rating={rating} />
        <h3 className="mt-4 text-lg font-medium text-white">PLACEHOLDER</h3>
        <p className="mt-1.5 text-m text-white">{description}</p>
        <p className="mt-1.5 text-sm text-white">$14.99</p>
        <form className="mt-4">
          <button className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
            Add to Cart
          </button>
        </form>
      </div>
    </Link>
  );
};

export default Product;
