/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const LinkMarkdown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            return <a {...props}></a>;
          }

          console.log(props);
          return (
            <Link href={href} legacyBehavior>
              <a {...props}></a>
            </Link>
          );
        }
      }}>
      {children}
    </ReactMarkdown>
  );
};

export default LinkMarkdown;
