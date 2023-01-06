/* eslint-disable jsx-a11y/anchor-has-content */
import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';
import { MarkdownResult } from 'utils';

const LinkMarkdownMDX = ({ children }: { children: MarkdownResult }) => {
  return (
    <MDXRemote
      {...children}
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            return <a {...props}></a>;
          }

          const APP_URL = process.env.APP_URL! as string;

          if (
            href.startsWith('http://' || 'https://') && !href.startsWith(APP_URL)
          ) {
            return (
              <a
                {...props}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
              />
            )
          }

          return (
            <Link href={href} legacyBehavior>
              <a {...props} />
            </Link>
          )
        },

     
        }
      }}
    />
  );
};

export default LinkMarkdownMDX;
