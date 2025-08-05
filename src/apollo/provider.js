// src/ApolloProvider.js
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://r4dz7ss5od.execute-api.us-east-1.amazonaws.com/dev/graphql', 
  cache: new InMemoryCache()
});

export default function ApolloWrapper({ children }) {
  return <Provider client={client}>{children}</Provider>;
}
