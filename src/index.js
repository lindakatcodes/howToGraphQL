import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


// this is the url where the gql server runs
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

// sets up the apollo client
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// root app component is wrapped in higher order component for the provider, which has the client as a prop
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
serviceWorker.unregister();
