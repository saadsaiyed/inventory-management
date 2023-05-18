import React, { useEffect, useState } from "react";
import Axios from "axios";

function addAnotherRow(currentRow) {
    var tbody_table = document.getElementById("tbody_table");
    var newID = tbody_table.rows.length;
    var hiddenInput = currentRow.querySelector("#hidden_input_" + (newID - 1));

    if (hiddenInput) {
        hiddenInput.remove();
        var row = tbody_table.insertRow(-1),
            i;

        hiddenInput = document.createElement("input");

        hiddenInput.setAttribute("type", "hidden");
        hiddenInput.setAttribute("id", "hidden_input_" + newID);
        hiddenInput.setAttribute("value", "0");
        for (i = 0; i < tbody_table.rows[0].cells.length; i++) {
            var td = row.insertCell(i),
                divP = document.createElement("div"),
                divC = document.createElement("div"),
                input = document.createElement("input"),
                nameID;

            td.setAttribute("class", "px-6 py-4 whitespace-nowrap");
            divP.setAttribute("class", "flex items-center");
            divC.setAttribute("class", "mt-1 rounded-md shadow-sm");
            input.setAttribute(
                "class",
                "block w-full sm:text-lg text-gray-500 border-gray-300 rounded-md"
            );
            input.setAttribute("type", "text");
            switch (i) {
                case 0:
                    nameID = "barcode_" + newID.toString();
                    input.setAttribute("name", nameID);
                    input.setAttribute("id", nameID);
                    input.addEventListener("focus", () => addAnotherRow(row), false);

                    divC.appendChild(input);
                    divP.appendChild(divC);
                    td.appendChild(divP);

                    break;

                case 1:
                    nameID = "product_name_" + newID.toString();
                    input.setAttribute("name", nameID);
                    input.setAttribute("id", nameID);
                    input.setAttribute("tabindex", "1");

                    td.appendChild(input);

                    break;

                case 2:
                    nameID = "count_" + newID.toString();
                    input.setAttribute("name", nameID);
                    input.setAttribute("id", nameID);
                    input.setAttribute("size", "1");
                    input.setAttribute("tabindex", "1");

                    divC.appendChild(input);
                    divP.appendChild(divC);
                    td.appendChild(divP);

                    break;

                case 3:
                    nameID = "stock_" + newID.toString();
                    td.setAttribute(
                        "class",
                        "px-6 py-4 whitespace-nowrap text-gray-500"
                    );
                    divP.setAttribute("class", "text-lg text-gray-900");
                    divP.setAttribute("id", nameID);
                    td.appendChild(divP);

                    break;

                case 4:
                    nameID = "taken_from_direct_" + newID.toString();
                    td.setAttribute(
                        "class",
                        "px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                    );
                    input.setAttribute("type", "checkbox");
                    input.setAttribute("name", nameID);
                    input.setAttribute("id", nameID);
                    input.setAttribute(
                        "class",
                        "h-7 w-7 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    );
                    input.setAttribute("tabindex", "1");

                    td.appendChild(input);

                    break;

                case 5:
                    nameID = "converted_0" + newID.toString();
                    td.setAttribute(
                        "class",
                        "px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                    );
                    input.setAttribute("type", "checkbox");
                    input.setAttribute("name", nameID);
                    input.setAttribute("id", nameID);
                    input.setAttribute(
                        "class",
                        "h-7 w-7 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    );
                    input.setAttribute("tabindex", "1");

                    td.appendChild(input);
                    td.appendChild(hiddenInput); //for the next element event listening logic

                    break;

                default:
                    break;
            }
        }
        row.addEventListener("click", () => addAnotherRow(row), false);
    }
}
function onBarcodeChange(barcode) {
    var lastID = parseInt(barcode.id.substr(-1)),
        proceedToFetch = false;
    // Increasing Count For Duplicates Barcode
    if (lastID != 0 && barcode.value === document.querySelector("#barcode_" + (lastID - 1)).value) {
        --lastID;
        var countValue = document.querySelector("#count_" + lastID).value;
        document.querySelector("#count_" + lastID).value = (countValue != "") ? ++countValue : 1;
        barcode.value = "";
        barcode.focus();
    }
    else {
        Axios({
            method: "GET",
            url: `/api/barcode/${barcode.value}/product`,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                document.querySelector("#product_name_" + lastID).value = res.data.name;
                if (document.querySelector("#count_" + lastID).value)
                    document.querySelector("#count_" + lastID).value++;
                else
                    document.querySelector("#count_" + lastID).value = 1;
            });
        Axios({
            method: "GET",
            url: `/api/barcode/${barcode.value}`,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                console.log(res.data.total_production - res.data.total_sold + res.data.adjustment);
                document.querySelector("#stock_" + lastID).innerHTML = res.data.total_production - res.data.total_sold + res.data.adjustment;
            });

        // changing state
    }
}
function invoiceSplitter(current_element) {
    var current_value = current_element.value;

    var invoices = current_value.split("} ");
    if (!invoices[1]) return;
    var temp = invoices[0].split("{");
    var invoiceNumber = temp[1];

    var invoiceName = invoices[1];

    document.getElementById("invoice_number").value = invoiceNumber;
    current_element.value = invoiceName;
}

function handleSubmit(params) {

}

export default function Invoice() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {

        document.getElementById("invoice_name").focus();

        //Initial Calling Functions
        addAnotherRow(document.getElementById("tr_tbody_table_0"));

        // Event Listeners - START
        document.getElementById("tbody_table").addEventListener("change", (event) => {
            if (event.target.id.substr(0, event.target.id.length - 1) === 'barcode_') {
                onBarcodeChange(event.target);
            }
        });
        document.getElementById("invoice_name").addEventListener("change", (event) => invoiceSplitter(event.target), false);
        document.getElementById("barcode_0").addEventListener("change", (event) => invoiceSplitter(event.target), false);
        // Event Listeners - END
    }, []);

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
            <form onSubmit={handleSubmit()}>
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
