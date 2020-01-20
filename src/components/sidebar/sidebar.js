import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => (
	<div className="w-64 bg-gray-100">
		<button className="block w-full px-4 py-4 flex items-center focus:outline-none bg-gray-800">
			<span className="text-2xl font-medium text-white">Techy, Inc</span>
			<svg
				className="w-6 h-6 ml-auto mx-4 mr-2 mt-2 stroke-current text-white"
				viewBox="0 0 24 24"
				fill="white"
			>
				<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8l4.95 4.95z" />
			</svg>
		</button>

		<nav className="mt-4 px-4">
			<ul>
				<li className="mb-2">
					<NavLink
						to="/"
						exact
						activeClassName="bg-white font-semibold"
						className="block px-4 py-4 rounded-lg"
					>
						<svg
							className="w-6 h-6 mr-2 inline-block text-gray-600 stroke-current"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<circle cx="12" cy="12" r="10" />
							<line x1="14.31" y1="8" x2="20.05" y2="17.94" />
							<line x1="9.69" y1="8" x2="21.17" y2="8" />
							<line x1="7.38" y1="12" x2="13.12" y2="2.06" />
							<line x1="9.69" y1="16" x2="3.95" y2="6.06" />
							<line x1="14.31" y1="16" x2="2.83" y2="16" />
							<line x1="16.62" y1="12" x2="10.88" y2="21.94" />
						</svg>
						<span className="text-gray-700">Dashboard</span>
					</NavLink>
				</li>
				<li className="mt-2 mb-2">
					<NavLink
						to="/invoices"
						activeClassName="bg-white font-semibold"
						className="block px-4 py-4 rounded-lg"
					>
						<svg
							className="w-6 h-6 mr-2 inline-block text-gray-600 stroke-current"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<polygon points="12 2 2 7 12 12 22 7 12 2" />
							<polyline points="2 17 12 22 22 17" />
							<polyline points="2 12 12 17 22 12" />
						</svg>
						<span className="text-gray-700">Invoices</span>
					</NavLink>
				</li>
				<li className="mt-2 mb-2 rounded-lg">
					<NavLink
						to="/clients"
						activeClassName="bg-white font-semibold"
						className="block px-4 py-4"
					>
						<svg
							className="w-6 h-6 mr-2 inline-block text-gray-600 stroke-current"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
							<circle cx="9" cy="7" r="4" />
							<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
							<path d="M16 3.13a4 4 0 0 1 0 7.75" />
						</svg>
						<span className="text-gray-700">Clients</span>
					</NavLink>
				</li>
				<li className="mt-2 mb-2 rounded-lg">
					<NavLink
						to="/products"
						activeClassName="bg-white font-semibold"
						className="block px-4 py-4"
					>
						<svg
							className="w-6 h-6 mr-2 inline-block text-gray-600 stroke-current"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
							<line x1="7" y1="7" x2="7.01" y2="7" />
						</svg>
						<span className="text-gray-700">Products/Services</span>
					</NavLink>
				</li>
				<li className="mt-2 mb-2 rounded-lg">
					<NavLink
						to="/settings"
						activeClassName="bg-white font-semibold"
						className="block px-4 py-4"
					>
						<svg
							className="w-6 h-6 mr-2 inline-block text-gray-600 stroke-current"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<circle cx="12" cy="12" r="3" />
							<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
						</svg>
						<span className="text-gray-700">Settings</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	</div>
);
export default Sidebar;
