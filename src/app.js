import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import Sidebar from "./components/sidebar/sidebar";

function App() {
	return (
		<BrowserRouter>
			<div className="h-screen flex flex-col">
				<div className="flex flex-1">
					<Sidebar />
					<main className="px-6 py-4 bg-gray-200 flex-1">
						<Routes />
					</main>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
