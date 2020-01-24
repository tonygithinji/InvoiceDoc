import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as cx from "classnames";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const query = gql`
	{
		allItems {
			id
			name
			price
			description
			unit
		}
	}
`;

const ItemList = () => {
	const [showFilter, toggleFilter] = useState(false);

	const { loading, data } = useQuery(query);

	const handleToggleFilter = () => {
		toggleFilter(!showFilter);
	};

	return (
		<>
			<div className="flex justify-between items-end">
				<div>
					<h1 className="text-2xl font-semibold text-gray-800">
						Items
					</h1>
				</div>
				<div>
					<Link
						className="text-gray-800 border-gray-500 border-2 rounded-lg px-8 py-2 hover:border-gray-700 focus:outline-none"
						to="/items/new"
					>
						<svg
							className="w-6 h-6 mr-2 -mt-1 inline-block text-gray-600"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="12" y1="5" x2="12" y2="19" />
							<line x1="5" y1="12" x2="19" y2="12" />
						</svg>
						<span>New Item</span>
					</Link>
				</div>
			</div>

			<div className="flex justify-between items-end mt-6">
				<div className="flex-1">
					<input
						type="text"
						placeholder="Search items"
						className="py-2 px-4 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none w-1/2 max-w-sm"
					/>
				</div>
				<div>
					<button
						className={cx(
							"border-gray-400 border rounded-lg px-4 py-2 hover:border-gray-700 focus:outline-none",
							{
								"bg-gray-500 text-gray-200": showFilter,
								"text-gray-700": !showFilter
							}
						)}
						onClick={handleToggleFilter}
					>
						<svg
							className="w-6 h-6 mr-2 inline-block text-gray-600"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
						</svg>
						<span>Filters</span>
					</button>
				</div>
			</div>

			<div
				className={cx("bg-white flex mt-4 py-4 px-4 rounded-lg", {
					hidden: !showFilter,
					block: showFilter
				})}
			>
				<div className="flex-1 mr-8">
					<div className="text-gray-600 mb-1">Type</div>
					<div className="relative">
						<select className="appearance-none py-1 px-2 border border-gray-300 rounded-lg bg-white w-full leading-tight focus:outline-none text-gray-600">
							<option
								value=""
								className="border border-gray-300 rounded-lg"
							>
								All
							</option>
							<option
								value=""
								className="border border-gray-300 rounded-lg"
							>
								Goods
							</option>
							<option
								value=""
								className="border border-gray-300 rounded-lg"
							>
								Service
							</option>
						</select>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg
								className="fill-current h-4 w-4"
								viewBox="0 0 20 20"
							>
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
				</div>
				<div className="flex-1 mr-8">
					<div className="text-gray-600 mb-1">Status</div>
					<div className="relative">
						<select className="appearance-none py-1 px-2 border border-gray-300 rounded-lg bg-white w-full leading-tight focus:outline-none text-gray-600">
							<option
								value=""
								className="border border-gray-300 rounded-lg"
							>
								All
							</option>
							<option
								value=""
								className="border border-gray-300 rounded-lg"
							>
								Active
							</option>
							<option
								value=""
								className="border border-gray-300 rounded-lg"
							>
								Inactive
							</option>
						</select>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg
								className="fill-current h-4 w-4"
								viewBox="0 0 20 20"
							>
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
				</div>
				<div className="flex-1 mr-8" />
				<div className="flex-1" />
			</div>

			{loading && <div>Loading...</div>}

			{!loading && (
				<div className="my-4 bg-white border-2 border-gray-300 rounded-lg">
					<table className="table-fixed w-full">
						<thead className="border-b-2 border-gray-300">
							<tr>
								<th className="w-1/3 py-4 font-normal text-gray-700">
									Name
								</th>
								<th className="w-1/2 py-4 font-normal text-gray-700">
									Description
								</th>
								<th className="w-64 py-4 font-normal text-gray-700">
									Rate
								</th>
								<th className="w-32 py-4 font-normal text-gray-700">
									Unit
								</th>
							</tr>
						</thead>
						<tbody>
							{data.allItems &&
								data.allItems.length > 0 &&
								data.allItems.map(item => (
									<tr
										className="border-b border-gray-300 cursor-pointer hover:bg-gray-100"
										key={item.id}
									>
										<td className="py-6 font-normal text-gray-700 text-center">
											{item.name}
										</td>
										<td className="py-6 font-normal text-gray-700 text-center">
											{item.description}
										</td>
										<td className="py-6 font-normal text-gray-700 text-center">
											{item.price}
										</td>
										<td className="py-6 font-normal text-gray-700 text-center">
											{item.unit}
										</td>
									</tr>
								))}

							{data.allItems && data.allItems.length === 0 && (
								<tr>
									<td
										colSpan="4"
										className="py-6 font-normal text-gray-700 text-center"
									>
										You have no items
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			)}
		</>
	);
};

export default ItemList;
