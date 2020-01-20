import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as cx from "classnames";

const InvoiceList = () => {
	const [showFilter, toggleFilter] = useState(false);

	const handleToggleFilter = () => {
		toggleFilter(!showFilter);
	};

	return (
		<>
			<div className="flex justify-between items-end">
				<div>
					<h1 className="text-2xl font-semibold text-gray-800">
						Invoices
					</h1>
				</div>
				<div>
					<Link
						className="text-gray-800 border-gray-500 border-2 rounded-lg px-8 py-2 hover:border-gray-700 focus:outline-none"
						to="/invoices/new"
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
						<span>New Invoice</span>
					</Link>
				</div>
			</div>

			<div className="mt-10 mb-4">
				<ul className="text-gray-700">
					<li className="inline-block mr-4 px-2 cursor-pointer font-semibold border-b-2 border-gray-700">
						All
					</li>
					<li className="inline-block mx-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-gray-700">
						Paid
					</li>
					<li className="inline-block mx-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-gray-700">
						Unpaid
					</li>
					<li className="inline-block mx-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-gray-700">
						Drafts
					</li>
				</ul>
			</div>

			<div className="flex justify-between items-end">
				<div className="flex-1">
					<input
						type="text"
						placeholder="Search invoices"
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
					<div className="text-gray-600 mb-1">Start Date</div>
					<div>
						<input
							type="text"
							className="py-1 px-2 border border-gray-300 rounded-lg placeholder-gray-400 w-full focus:outline-none text-gray-600"
						/>
					</div>
				</div>
				<div className="flex-1 mr-8">
					<div className="text-gray-600 mb-1">End Date</div>
					<div>
						<input
							type="text"
							className="py-1 px-2 border border-gray-300 rounded-lg placeholder-gray-400 w-full focus:outline-none text-gray-600"
						/>
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
								Paid
							</option>
							<option
								value=""
								className="border border-gray-300 rounded-lg"
							>
								Unpaid
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
				<div className="flex-1" />
			</div>

			<div className="my-4 bg-white border-2 border-gray-300 rounded-lg">
				<table className="table-auto w-full">
					<thead className="border-b-2 border-gray-300">
						<tr>
							<th className="py-4 font-normal text-gray-700">
								Date
							</th>
							<th className="py-4 font-normal text-gray-700">
								Invoice ID
							</th>
							<th className="py-4 font-normal text-gray-700">
								Customer
							</th>
							<th className="py-4 font-normal text-gray-700">
								Amount
							</th>
							<th className="py-4 font-normal text-gray-700">
								Status
							</th>
							<th className="py-4 font-normal text-gray-700">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b border-gray-300">
							<td className="py-6 font-normal text-gray-700 text-center">
								12/03/2020
							</td>
							<td className="py-6 font-normal text-gray-700 text-center">
								INV1001
							</td>
							<td className="py-6 font-normal text-gray-700 text-center">
								Richard Hopkins
							</td>
							<td className="py-6 font-normal text-gray-700 text-center">
								$ 2,000.00
							</td>
							<td className="py-6 font-normal text-gray-700 text-center">
								<span className="py-2 px-4 bg-green-200 rounded-full text-gray-700 text-sm">
									Paid
								</span>
							</td>
							<td className="py-6 font-normal text-gray-700 text-center">
								<span>
									<svg
										className="w-6 h-6 inline-block text-gray-700 cursor-pointer"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<circle cx="12" cy="12" r="1" />
										<circle cx="12" cy="5" r="1" />
										<circle cx="12" cy="19" r="1" />
									</svg>
								</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default InvoiceList;
