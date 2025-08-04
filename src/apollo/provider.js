// src/ApolloProvider.js
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.68.65:4000/graphql', // <-- Replace with your backend URL
  cache: new InMemoryCache()
});

export default function ApolloWrapper({ children }) {
  return <Provider client={client}>{children}</Provider>;
}
