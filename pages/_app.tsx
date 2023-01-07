import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartStateContextProvider } from 'components/Cart/CartContext';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from 'graphql/apolloClient';

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <CartStateContextProvider>
        <QueryClientProvider client={client}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </CartStateContextProvider>
    </ApolloProvider>
  );
}
