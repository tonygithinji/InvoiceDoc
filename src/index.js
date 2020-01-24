import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import "toasted-notes/src/styles.css";
import "./css/index.css";
import App from "./app";

const client = new ApolloClient({
	uri: "http://localhost:8080/graphql"
});

const app = (
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);

ReactDOM.render(app, document.getElementById("root"));
