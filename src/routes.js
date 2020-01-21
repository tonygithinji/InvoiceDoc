import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./components/dashboard/dashboard";
import InvoiceList from "./components/invoices/list/list";
import NewInvoice from "./components/invoices/new/new";
import ItemList from "./components/items/list/list";

const Routes = () => (
	<Switch>
		<Route path="/" exact component={Dashboard} />
		<Route path="/invoices" exact component={InvoiceList} />
		<Route path="/invoices/new" exact component={NewInvoice} />
		<Route path="/items" exact component={ItemList} />
	</Switch>
);

export default Routes;
