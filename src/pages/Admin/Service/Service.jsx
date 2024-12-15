import React from "react";
import DashboardLayout from "../../../layouts/DashboardLayout";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-quaternary">Service</h1>
        <Link
          to="/dashboard/service/create"
          className="bg-quaternary text-white p-2 rounded-md"
        >
          Add Service
        </Link>
      </div>

      <div class="relative overflow-x-auto py-10">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Title
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>
              <th scope="col" class="px-6 py-3">
                Duration
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b  ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <button className="bg-[#dbd825] text-white font-bold py-2 px-4 rounded hover:bg-[#c6c42c]">
                  Edit
                </button>
                <button className="bg-[#f44336] text-white font-bold py-2 px-4 rounded hover:bg-[#d32f2f] ml-2">
                  Delete
                </button>
              </td>
            </tr>
            <tr class="bg-white border-b  ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr class="bg-white ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Service;
