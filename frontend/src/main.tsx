import React from "react";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");

if (!container) throw new Error("Could not find root element with id 'root'");

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const root = createRoot(container);

console.log(client);

client
  .mutate({
    mutation: gql`
      mutation CreateApplicant($firstName: String!, $lastName: String!) {
        createApplicant(firstName: $firstName, lastName: $lastName) {
          firstName
          lastName
        }
      }
    `,
    variables: {
      firstName: "John",
      lastName: "Doe",
    },
  })
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
