/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";

const NewItem = () => {
	const units = [
		{ key: "pcs", value: "pieces" },
		{ key: "box", value: "box" },
		{ key: "m", value: "meter (m)" },
		{ key: "cm", value: "centimeter (cm)" },
		{ key: "kg", value: "kilogram (kg)" },
		{ key: "gm", value: "gram (g)" },
		{ key: "ft", value: "feet" },
		{ key: "in", value: "inches" },
		{ key: "lb", value: "pound" }
	];

	return (
		<>
			<div className="mb-4">
				<h1 className="text-2xl font-semibold text-gray-800">
					New Item
				</h1>
			</div>

			<div className="bg-white py-4 px-6 rounded-lg">
				<div className="flex mb-4">
					<div className="w-1/2 px-3">
						<label
							htmlFor="item-name"
							className="text-gray-700 mb-1 block"
						>
							Name
						</label>
						<input
							type="text"
							className="py-2 px-4 border border-gray-300 rounded-lg placeholder-gray-400 block w-full text-gray-700 focus:outline-none"
							id="item-name"
							name="item-name"
						/>
					</div>
					<div className="w-1/2 px-3">
						<label
							htmlFor="selling-price"
							className="text-gray-700 mb-1 block"
						>
							Selling Price
						</label>
						<input
							type="text"
							className="py-2 px-4 border border-gray-300 rounded-lg placeholder-gray-400 block w-full text-gray-700 focus:outline-none"
							id="selling-price"
							name="selling-price"
						/>
					</div>
				</div>
				<div className="flex mb-4">
					<div className="w-1/2 px-3">
						<label
							htmlFor="item-type"
							className="text-gray-700 mb-1 block"
						>
							Type
						</label>
						<div className="relative">
							<select
								className="appearance-none py-2 px-4 border border-gray-300 rounded-lg bg-white w-full text-gray-700 leading-tight focus:outline-none text-gray-600"
								name="item-type"
							>
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
					<div className="w-1/2 px-3">
						<label
							htmlFor="item-unit"
							className="text-gray-700 mb-1 block"
						>
							Unit
						</label>
						<div className="relative">
							<select
								className="appearance-none py-2 px-4 border border-gray-300 rounded-lg bg-white w-full text-gray-700 leading-tight focus:outline-none text-gray-600"
								name="item-unit"
							>
								{units.map(unit => (
									<option
										value={unit.key}
										className="border border-gray-300 rounded-lg"
									>
										{unit.value}
									</option>
								))}
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
				</div>
				<div className="flex mb-6">
					<div className="w-1/2 px-3">
						<label
							htmlFor="item-desc"
							className="text-gray-700 mb-1 block"
						>
							Description
						</label>
						<textarea
							type="text"
							className="py-2 px-4 border border-gray-300 rounded-lg placeholder-gray-400 block w-full text-gray-700 focus:outline-none"
							id="item-desc"
							name="item-desc"
						/>
					</div>
					<div className="w-1/2 px-3">
						<label
							htmlFor="item-desc"
							className="text-gray-700 mb-1 block"
						>
							Tax
						</label>
						<div className="relative">
							<select
								className="appearance-none py-2 px-4 border border-gray-300 rounded-lg bg-white w-full text-gray-700 leading-tight focus:outline-none text-gray-600"
								name="item-unit"
							>
								<option
									value=""
									className="border border-gray-300 rounded-lg"
								/>
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
				</div>
				<div className="text-right pr-3">
					<button className="text-gray-300 bg-gray-700 border-gray-700 border-2 rounded-lg px-4 py-2 mr-4 hover:bg-gray-800 focus:outline-none">
						Add Item
					</button>
					<button className="text-gray-800 border-gray-500 border-2 rounded-lg px-4 py-2 hover:border-gray-700 focus:outline-none">
						Cancel
					</button>
				</div>
			</div>
		</>
	);
};

export default NewItem;
