import React, { useState, useRef, useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import * as queries from "./queries";

const Test = () => {
	const [selectedClient, setSelectedClient] = useState({
		id: "",
		name: "",
		phone: "",
		email: "",
		showAddClient: ""
	});

	const node = useRef();

	const [clients, setClients] = useState(null);
	const [searchClient, searchResult] = useLazyQuery(queries.SEARCH_CLIENT, {
		fetchPolicy: "network-only"
	});

	console.log("rendered", searchResult);
	if (
		!searchResult.loading &&
		!searchResult.called &&
		searchResult.data &&
		searchResult.data.searchClient
	) {
		setClients(searchResult.data.searchClient);
		console.log(searchResult.data.searchClient);
	}

	const handleShowAddClient = () => {
		setSelectedClient({
			...selectedClient,
			showAddClient: !selectedClient.showAddClient
		});
	};

	const handleSearchClient = e => {
		console.log("Query fired");
		searchClient({
			variables: {
				query: e.target.value
			}
		});
	};

	// useEffect(() => {
	// 	const handleClickOutside = e => {
	// 		if (node.current.contains(e.target)) {
	// 			// inside click
	// 			return;
	// 		}
	// 		// outside click
	// 		setSelectedClient({ ...selectedClient, showAddClient: false });
	// 	};

	// 	if (selectedClient.showAddClient) {
	// 		document.addEventListener("mousedown", handleClickOutside);
	// 	} else {
	// 		document.removeEventListener("mousedown", handleClickOutside);
	// 	}

	// 	return () => {
	// 		document.removeEventListener("mousedown", handleClickOutside);
	// 	};
	// }, [selectedClient, selectedClient.showAddClient]);

	return (
		<>
			<div className="text-gray-700 px-4 font-semibold mb-2 w-full relative">
				<div className="py-4 px-2 h-40 absolute top-0 w-full rounded-lg shadow-lg">
					<input
						type="text"
						placeholder="Search client"
						className="bg-white block border-2 border-transparent rounded-lg py-1 px-2 w-full border-gray-200 focus:outline-none focus:border-gray-400"
						onChange={e => handleSearchClient(e)}
					/>
					{searchResult.loading && (
						<div className="py-6 text-center text-gray-600">
							Loading...
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Test;
