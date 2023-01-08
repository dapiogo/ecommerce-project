import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcm03bgh2ns001ufcfhl41c6/master',
  cache: new InMemoryCache()
});
