import { CartBar } from 'components/Cart/CartBar';
import menu from 'config/menu';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          DG
        </span>

        <div className="flex md:order-2">
          <CartBar />
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menu.map((menuItem) => (
              <li key={menuItem.id}>
                <Link
                  href={menuItem.to}
                  className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                    router.pathname === menuItem.to
                      ? 'text-blue-700'
                      : 'dark:text-gray-400'
                  }`}>
                  {menuItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
