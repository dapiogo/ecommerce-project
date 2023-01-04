import Link from 'next/link';

const Footer = () => {
  const fullYearWithText = `${new Date().getFullYear()} All Rights Reserved.`;
  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between container mx-auto">
        <a
          href="https://flowbite.com/"
          className="flex items-center mb-4 sm:mb-0">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            DG
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link href="/privacy" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        {fullYearWithText}
      </span>
    </footer>
  );
};

export default Footer;
