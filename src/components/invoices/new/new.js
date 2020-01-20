import React from "react";
import { Link } from "react-router-dom";

const NewInvoice = () => {
	return (
		<>
			<div>
				<h1 className="text-2xl font-semibold text-gray-800">
					New Invoice
				</h1>
			</div>
			<div className="flex justify-between items-end mb-4">
				<div>
					<Link
						className="text-gray-800 border-2 border-transparent rounded-lg pl-2 pr-4 py-2 focus:outline-none hover:border-gray-500"
						to="/invoices"
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
							<polyline points="15 18 9 12 15 6" />
						</svg>
						<span>Back</span>
					</Link>
				</div>
				<div>
					<button className="text-gray-800 border-gray-500 border-2 rounded-lg px-4 py-2 mr-2 hover:border-gray-700 focus:outline-none">
						Save as Draft
					</button>
					<button className="text-white border-gray-600 border-2 rounded-lg px-8 py-2 bg-gray-600 hover:bg-gray-700 focus:outline-none">
						Send
					</button>
				</div>
			</div>

			<div className="bg-white rounded-lg px-12 py-8">
				<div className="flex justify-between mb-10 pb-4 border-b-2 border-gray-100">
					<div className="flex-1">LOGO</div>
					<div className="flex-1 text-gray-600 mr-4">
						<div className="mb-2">
							<input
								type="text"
								value="Company Name"
								className="bg-white block border-2 border-transparent rounded-lg py-1 px-2 w-full focus:outline-none focus:border-gray-400"
							/>
						</div>
						<div>
							<input
								type="text"
								value="Address"
								className="bg-white block border-2 border-transparent rounded-lg py-1 px-2 w-full focus:outline-none focus:border-gray-400"
							/>
						</div>
					</div>
					<div className="flex-1 text-gray-600">
						<div className="mb-2">
							<input
								type="text"
								value="Phone"
								className="bg-white block border-2 border-transparent rounded-lg py-1 px-2 w-full focus:outline-none focus:border-gray-400"
							/>
						</div>
						<div>
							<input
								type="text"
								value="Email"
								className="bg-white block border-2 border-transparent rounded-lg py-1 px-2 w-full focus:outline-none focus:border-gray-400"
							/>
						</div>
					</div>
				</div>

				<div className="flex justify-between mb-10">
					<div className="text-gray-800">
						<div className="text-3xl font-semibold mb-2">
							Invoice
						</div>
						<div className="mb-2">INV1001</div>
						<div>24/12/2019</div>
					</div>
					<div className="text-gray-600 min-w-lg">
						<div className="text-gray-800 font-semibold mb-2">
							Customer Name
						</div>
						<div className="mb-2">Address</div>
						<div className="mb-2">Phone</div>
						<div>Email</div>
					</div>
				</div>

				<div>
					<table className="table-auto w-full">
						<thead className="border-b-2 border-gray-300">
							<tr>
								<th className="py-4 font-normal text-gray-500">
									No.
								</th>
								<th className="py-4 font-normal text-gray-500">
									Item
								</th>
								<th className="py-4 font-normal text-gray-500 text-right">
									Qty
								</th>
								<th className="py-4 font-normal text-gray-500 text-right">
									Rate
								</th>
								<th className="py-4 font-normal text-gray-500 text-right">
									VAT
								</th>
								<th className="py-4 font-normal text-gray-500 text-right">
									Amount
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-gray-300">
								<td className="py-6 font-normal text-gray-700 text-center">
									1
								</td>
								<td className="py-6 font-normal text-gray-700 text-center">
									Printer
								</td>
								<td className="py-6 font-normal text-gray-700 text-right">
									2
								</td>
								<td className="py-6 font-normal text-gray-700 text-right">
									$ 2,000.00
								</td>
								<td className="py-6 font-normal text-gray-700 text-right">
									$ 0.00
								</td>
								<td className="py-6 font-semibold text-gray-700 text-right">
									$ 4,000.00
								</td>
							</tr>
							<tr className="border-b border-gray-300">
								<td className="py-6 font-normal text-gray-700 text-center">
									1
								</td>
								<td className="py-6 font-normal text-gray-700 text-center">
									Printer
								</td>
								<td className="py-6 font-normal text-gray-700 text-right">
									2
								</td>
								<td className="py-6 font-normal text-gray-700 text-right">
									$ 2,000.00
								</td>
								<td className="py-6 font-normal text-gray-700 text-right">
									$ 0.00
								</td>
								<td className="py-6 font-semibold text-gray-700 text-right">
									$ 4,000.00
								</td>
							</tr>
							<tr className="border-b border-gray-300">
								<td className="py-6 font-normal text-gray-700 text-center">
									1
								</td>
								<td className="py-6 font-normal text-gray-700 text-center">
									Printer
								</td>
								<td className="py-6 font-normal text-gray-700 text-right">
									2
								</td>
								<td className="py-6 font-normal text-gray-700 text-right">
									$ 2,000.00
								</td>
								<td className="py-6 font-normal text-gray-700 text-right">
									$ 0.00
								</td>
								<td className="py-6 font-semibold text-gray-700 text-right">
									$ 4,000.00
								</td>
							</tr>
						</tbody>
					</table>

					<div className="my-4 flex">
						<div className="flex-1">
							<button className="text-gray-800 border-gray-500 border-2 rounded-lg px-4 py-2 hover:border-gray-700 focus:outline-none">
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
								<span>Add Item</span>
							</button>
						</div>
						<div className="flex flex-1">
							<div className="flex-1" />
							<div className="flex-1">
								<div className="flex justify-between mb-4">
									<div className="text-gray-700">
										Subtotal
									</div>
									<div className="text-gray-700 font-semibold">
										$ 4,000.00
									</div>
								</div>
								<div className="flex justify-between my-4 pb-4 border-b border-gray-300">
									<div className="text-gray-700">VAT</div>
									<div className="text-gray-700 font-semibold">
										$ 0.00
									</div>
								</div>
								<div className="flex justify-between my-4">
									<div className="text-gray-700">Total</div>
									<div className="text-gray-700 font-semibold">
										$ 4,000.00
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewInvoice;
