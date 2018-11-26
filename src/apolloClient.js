import ApolloClient from 'apollo-boost';

import { API_URL } from './config';

const client = new ApolloClient({
  uri: API_URL,
});

export default client;
