import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as cx from "classnames";

const NewInvoice = () => {
	const invoiceItem = {
		number: 1,
		itemName: "",
		qty: 1,
		rate: "",
		vat: 0,
		amount: 0
	};
	const [invoiceItems, setInvoiceItems] = useState([invoiceItem]);

	const handleAddItem = () => {
		setInvoiceItems([
			...invoiceItems,
			{ ...invoiceItem, number: invoiceItems.length + 1 }
		]);
	};

	const handleRemoveItem = item => {
		const items = invoiceItems.filter(
			_item => _item.number !== item.number
		);

		setInvoiceItems(items);
	};

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
					<button className="text-white border-gray-700 border-2 rounded-lg px-8 py-2 mr-4 bg-gray-700 hover:bg-gray-800 focus:outline-none">
						Send
					</button>
					<button className="text-gray-800 border-gray-500 border-2 rounded-lg px-4 py-2 hover:border-gray-700 focus:outline-none">
						Save as Draft
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
					<table className="table-fixed w-full">
						<thead className="border-b-2 border-gray-300">
							<tr>
								<th className="w-16 py-4 font-normal text-gray-500">
									No.
								</th>
								<th className="w-1/3 py-4 font-normal text-gray-500">
									Item
								</th>
								<th className="py-4 font-normal text-gray-500 text-right">
									Qty ($)
								</th>
								<th className="py-4 font-normal text-gray-500 text-right">
									Rate ($)
								</th>
								<th className="py-4 font-normal text-gray-500 text-right">
									VAT ($)
								</th>
								<th className="py-4 font-normal text-gray-500 text-right">
									Amount
								</th>
								<th className="w-16 py-4 font-normal text-gray-500 text-center">
									<span />
								</th>
							</tr>
						</thead>
						<tbody>
							{invoiceItems.map((item, index) => (
								<tr
									className="border-b border-gray-300"
									key={item.number}
								>
									<td className="py-6 font-normal text-gray-700 text-center">
										{index + 1}
									</td>
									<td className="py-6 font-normal text-gray-700 text-center">
										<input
											type="text"
											className="bg-white block border-2 border-transparent rounded-lg py-1 px-2 text-center w-full focus:outline-none focus:border-gray-400 hover:border-gray-200"
										/>
									</td>
									<td className="py-6 font-normal text-gray-700 text-right">
										<input
											type="text"
											className="bg-white block border-2 border-transparent rounded-lg py-1 px-2 text-right w-full focus:outline-none focus:border-gray-400 hover:border-gray-200"
										/>
									</td>
									<td className="py-6 font-normal text-gray-700 text-right">
										<input
											type="text"
											className="bg-white block border-2 border-transparent rounded-lg py-1 px-2 text-right w-full focus:outline-none focus:border-gray-400 hover:border-gray-200"
											value={item.qty}
										/>
									</td>
									<td className="py-6 font-normal text-gray-700 text-right">
										{item.vat}
									</td>
									<td className="py-6 font-semibold text-gray-700 text-right">
										{item.amount}
									</td>
									<td className="py-6 font-semibold text-gray-700 text-center">
										<button
											onClick={() =>
												handleRemoveItem(item)
											}
											className={cx({
												hidden: index === 0
											})}
										>
											<svg
												className="w-4 h-4 text-gray-600 inline-block cursor-pointer hover:text-gray-800"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<polyline points="3 6 5 6 21 6" />
												<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
												<line
													x1="10"
													y1="11"
													x2="10"
													y2="17"
												/>
												<line
													x1="14"
													y1="11"
													x2="14"
													y2="17"
												/>
											</svg>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>

					<div className="my-4 flex">
						<div className="flex-1">
							<button
								className="text-gray-800 border-gray-500 border-2 rounded-lg px-4 py-2 hover:border-gray-700 focus:outline-none"
								onClick={handleAddItem}
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
										$ 0.00
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
										$ 0.00
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
