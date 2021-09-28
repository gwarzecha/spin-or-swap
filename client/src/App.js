import "./App.css";
import React from "react";

//libraries
// Provides data to all other components
import { ApolloProvider } from "@apollo/react-hooks";
// Gets data when ready to be used
import ApolloClient from "apollo-boost";

// Connects to back-end server
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
});

function App() {
  return (
    // need to flesh this out, this will have access to the server's API data through the
    //above client that was set up
    <ApolloProvider client={client}>
      <div>
        <Header />
        <div>
          <Home />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
