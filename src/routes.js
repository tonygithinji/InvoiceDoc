import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./components/dashboard/dashboard";
import InvoiceList from "./components/invoices/list/list";

const Routes = () => (
	<Switch>
		<Route path="/" exact component={Dashboard} />
		<Route path="/invoices" exact component={InvoiceList} />
	</Switch>
);

export default Routes;
