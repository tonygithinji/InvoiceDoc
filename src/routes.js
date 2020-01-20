import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./components/dashboard/dashboard";
import InvoiceList from "./components/invoices/list/list";
import NewInvoice from "./components/invoices/new/new";

const Routes = () => (
	<Switch>
		<Route path="/" exact component={Dashboard} />
		<Route path="/invoices" exact component={InvoiceList} />
		<Route path="/invoices/new" exact component={NewInvoice} />
	</Switch>
);

export default Routes;
