import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4stesoq2jco01yygwqbhb6p/master",
  cache: new InMemoryCache(),
});
