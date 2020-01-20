import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

// const query = gql`
//   {
//     allUsers {
//       id
//       firstName
//       lastName
//       email
//     }
//   }
// `;

const Dashboard = () => {
  // const { loading, error, data } = useQuery(query);

  return (
    <>
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Good evening, Justin
          </h1>
        </div>
        <div>
          <button className="text-gray-800 border-gray-500 border-2 rounded-lg px-8 py-2 hover:border-gray-700 focus:outline-none">
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
          </button>
        </div>
      </div>

      <div className="my-6 py-4 px-8 rounded-lg bg-white">
        <div className="mb-10 flex">
          <div className="text-gray-700 flex-1 mt-2">This month's overview</div>
          <div className="relative">
            <button className="py-1 px-2 border border-gray-400 rounded-lg w-32 text-center absolute right-0 group hover:shadow focus:outline-none">
              <div className="label">
                <span className="text-gray-700 text-sm">This month</span>
                <svg
                  className="h-4 w-4 stroke-current text-gray-700 inline-block"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
              <div className="dropdown-body hidden group-hover:block">
                <ul className="text-gray-700 text-sm text-left ml-3">
                  <li>This week</li>
                  <li>This Year</li>
                </ul>
              </div>
            </button>
          </div>
        </div>
        <div className="flex mt-8">
          <div className="text-gray-700 flex-1 border-r mr-20">
            <div className="uppercase">Sent invoices</div>
            <div className="text-2xl font-bold">12</div>
          </div>
          <div className="text-gray-700 flex-1 border-r mr-20">
            <div className="uppercase">Paid invoices</div>
            <div className="text-2xl font-bold">8</div>
          </div>
          <div className="text-gray-700 flex-1 border-r mr-20">
            <div className="uppercase">Overdue invoices</div>
            <div className="text-2xl font-bold">2</div>
          </div>
          <div className="text-gray-700 flex-1">
            <div className="uppercase">Clients added</div>
            <div className="text-2xl font-bold">4</div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="my-4 rounded-lg bg-white w-1/4 mr-2">
          <div className="py-4 px-8">
            <div className="relative">
              <button className="py-1 px-2 border border-gray-400 rounded-lg w-32 text-center absolute right-0 group hover:shadow focus:outline-none">
                <div className="label">
                  <span className="text-gray-700 text-sm">This month</span>
                  <svg
                    className="h-4 w-4 stroke-current text-gray-700 inline-block"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                <div className="dropdown-body hidden group-hover:block">
                  <ul className="text-gray-700 text-sm text-left ml-3">
                    <li>This week</li>
                    <li>This Year</li>
                  </ul>
                </div>
              </button>
            </div>
            <div>
              <div className="text-gray-700 mt-2">Total Paid Invoices</div>
              <div className="text-gray-700 font-bold text-2xl my-2">
                $ 12,400.00
              </div>
            </div>
          </div>
          <div className="bg-gray-400 pt-10 pb-8 px-8 flex justify-between items-stretch">
            <div className="flex-122">
              <div className="text-gray-700">Unpaid invoices</div>
              <div className="text-gray-700 font-bold text-2xl my-2">
                $ 2,050.00
              </div>
            </div>
            <div className="border border-gray-300" />
            <div className="flex-1222">
              <div className="text-gray-700">Overdue invoices</div>
              <div className="text-gray-700 font-bold text-2xl my-2">
                $ 720.00
              </div>
            </div>
          </div>
          <div className="py-4 px-8">
            <div className="text-gray-700">Clients</div>
            <div className="text-gray-700 font-bold text-2xl my-2">18</div>
          </div>
        </div>
        <div className="my-4 py-4 px-8 rounded-lg bg-white w-3/4 ml-2" />
      </div>

      <div className="my-4">
        <h2 className="text-xl text-gray-800">Recent invoices</h2>
        <div className="my-1 py-4 px-8 rounded-lg bg-white h-24" />
      </div>
    </>
  );
};

export default Dashboard;
