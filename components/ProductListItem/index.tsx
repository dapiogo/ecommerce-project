import { userCartState } from 'components/Cart/CartContext';
import { ProductDetails } from 'components/Product';
import Rating from 'components/Rating';
import Image from 'next/legacy/image';
import Link from 'next/link';

type TProductListItem = Pick<
  ProductDetails,
  'title' | 'image' | 'rating' | 'id'
>;

interface ProductListItemProps {
  data: TProductListItem;
}

const ProductListItem = ({ data }: ProductListItemProps) => {
  const { image, title, rating, id } = data;

  const { addItemToCart } = userCartState();

  return (
    <div className="relative  overflow-hidden group  rounded-xl border border-gray-700 flex flex-col">
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
      <div className="p-4 bg-white">
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
        />
      </div>

      <div className="relative p-6 border border-gray-800 bg-gray-900 text-white  h-full flex flex-col justify-between">
        <Rating rating={rating.rate} />
        <h3 className="mt-4 text-lg font-medium text-white truncate">
          {title}
        </h3>
        <Link href={`products/${id}`}>Do produktu</Link>
        <button
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          onClick={() =>
            addItemToCart({
              id,
              price: 21.22,
              title,
              count: 1
            })
          }>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductListItem;
