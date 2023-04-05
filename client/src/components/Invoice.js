import React, { useEffect, useState } from "react";
// import Axios from "axios";

export default function Invoice() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
            <form>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1
                        className="text-3xl font-bold text-gray-900"
                        id="testing"
                    >
                        Invoice
                    </h1>
                </div>
                <div className="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
                    <div className="px-8 bg-white rounded">
                        <div>
                            <label className="block mb-2 text-sm font-bold text-gray-500" htmlFor="invoice_name">
                                Invoice Name / Number
                            </label>
                            <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-500 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="invoice_name"
                                name="invoice_name"
                                type="text"
                            />
                        </div>
                        <div className="md:flex md:justify-between">
                            <div className="mb-4 md:mr-2 md:mb-0">
                                <label className="block mb-2 text-sm font-bold text-gray-500" htmlFor="invoice_number">
                                    Invoice Number
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-500 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="invoice_number"
                                    name="invoice_number"
                                    type="text"
                                    tabIndex="1"
                                    />
                            </div>
                            <div className="md:ml-2">
                                <label className="block mb-2 text-sm font-bold text-gray-500" htmlFor="total_quantity">
                                    Total Count
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-500 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="total_quantity"
                                    name="total_quantity"
                                    type="number"
                                    defaultValue="0"
                                    tabIndex="1"
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="flex flex-col">
                    <div className="-my-2 sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle min-w-full sm:px-6 lg:px-8">
                            <div className="shadow border-b border-gray-200 sm:rounded-lg">
                                <table className="relative min-w-full divide-y divide-gray-200">
                                    <thead >
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-bold text-gray-500 bg-gray-200 uppercase tracking-wider sticky top-0"
                                            >
                                                Barcode
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-bold text-gray-500 bg-gray-200 uppercase tracking-wide sticky top-0"
                                            >
                                                Product Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-bold text-gray-500 bg-gray-200 uppercase tracking-wide sticky top-0"
                                            >
                                                Count
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-bold text-gray-500 bg-gray-200 uppercase tracking-wide sticky top-0"
                                            >
                                                Stock
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3 text-xs font-bold text-gray-500 bg-gray-200 uppercase tracking-wide sticky top-0"
                                            >
                                                From Direct
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3 text-xs font-bold text-gray-500 bg-gray-200 uppercase tracking-wide sticky top-0"
                                            >
                                                Converted
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        className="bg-white divide-y divide-gray-200"
                                        id="tbody_table"
                                    >
                                        <tr id="tr_tbody_table_0">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="mt-1 rounded-md shadow-sm">
                                                        <input
                                                            type="text"
                                                            name="barcode_0"
                                                            id="barcode_0"
                                                            className="block w-full sm:text-lg text-gray-500 border-gray-300 rounded-md"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="text"
                                                    name="product_name_0"
                                                    id="product_name_0"
                                                    className="block w-full sm:text-lg text-gray-500 border-gray-300 rounded-md"
                                                    tabIndex="1"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="mt-1 rounded-md shadow-sm">
                                                        <input
                                                            type="text"
                                                            name="count_0"
                                                            id="count_0"
                                                            className="block w-full sm:text-lg text-gray-500 border-gray-300 rounded-md"
                                                            size="1"
                                                            tabIndex="1"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                                <div
                                                    id="stock_0"
                                                    className="text-lg text-gray-900"
                                                >
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <input
                                                    id="taken_from_direct_0"
                                                    name="taken_from_direct_0"
                                                    type="checkbox"
                                                    className="h-7 w-7 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                                    tabIndex="1"
                                                />
                                                <input type="hidden" id="hidden_input_0" value="1" />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <input
                                                    id="converted_0"
                                                    name="converted_0"
                                                    type="checkbox"
                                                    className="h-7 w-7 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                                    tabIndex="1"
                                                />
                                                <input type="hidden" id="hidden_input_0" value="1" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </form>       
        </div>
    );
}
