import React, { useEffect, useState } from "react";
import Axios from "axios";

function handleSubmit() {
    this.search
}

function ProductReport() {
    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
            <form onSubmit={handleSubmit()}>
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1
                            className="text-3xl font-bold text-gray-900"
                            id="testing"
                        >
                            Product Report
                        </h1>
                    </div>
                    <div className="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
                        <div className="px-8 bg-white rounded">
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-500" htmlFor="invoice_name">
                                    Search
                                </label>
                                <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-500 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="product_search"
                                    name="product_search"
                                    type="text"
                                />
                                <input type="submit" value="Submit" name="submit" />
                            </div>
                        </div>
                    </div>
                </header>
                <div className="flex flex-col">
                    <div className="-my-2 sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle min-w-full sm:px-6 lg:px-8">
                            <div className="shadow border-b border-gray-200 sm:rounded-lg">
                                <div class="grid item4">
                                    <div class="inside">
                                        <span>Warehouse Details (1 LB) : For Each 114g you need to have 1lb</span>
                                        <span id="rationCalculator"><label>Number of Pound: </label><input type="text" size='10' onchange="ratioCalculator(this.value, '')" /></span>
                                    </div>
                                    <div class="details">
                                        <div class="iitem1">
                                            <table>
                                                <tr>
                                                    <td><label for="">Barcode :</label></td><td><label for=""></label></td>
                                                </tr>
                                                <tr>
                                                    <td><label for="">Item Code :</label></td><td><label for=""></label></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="iitem2">
                                            <table>
                                                <tr>
                                                    <td><label for="">Locations :</label></td><td><label for=""></label></td>
                                                </tr>
                                                <tr>
                                                    <td><label for="">Zone :</label></td><td><label for=""></label></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="iitem3">
                                            <table>
                                                <tr>
                                                    <td><label for="">Yearly Avg :</label></td><td><label for=""></label></td>
                                                </tr>
                                                <tr>
                                                    <td><label for="">In Stock :</label></td><td><label for=""></label></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="iitem4">
                                            <table>
                                                <tr>
                                                    <td><label for="">Total Sold :</label></td><td><label for=""></label></td>
                                                </tr>
                                                <tr>
                                                    <td><label for="">Warehouse Stock :</label></td><td><label for=""></label></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid item6">
                                    <div class="inside"><span>Warehouse Details (114g) :</span></div>
                                    <div class="details">
                                        <div class="iitem1">
                                            <table>
                                                <tr>
                                                    <td><label for="">Barcode :</label></td><td><label for=""></label></td>
                                                </tr>
                                                <tr>
                                                    <td><label for="">Item Code :</label></td><td><label for="">A</label></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="iitem2">
                                            <table>
                                                <tr>
                                                    <td><label for="">Locations :</label></td><td><label for=""></label></td>
                                                </tr>
                                                <tr>
                                                    <td><label for="">Zone :</label></td><td><label for=""></label></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="iitem3">
                                            <table>
                                                <tr>
                                                    <td><label for="">Yearly Avg :</label></td><td><label for=""></label></td>
                                                </tr>
                                                <tr>
                                                    <td><label for="">In Stock :</label></td><td><label for=""></label></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="iitem4">
                                            <table>
                                                <tr>
                                                    <td><label for="">Total Sold :</label></td><td><label for=""></label></td>
                                                </tr>
                                                <tr>
                                                    <td><label for="">Warehouse Stock :</label></td><td><label for=""></label></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default ProductReport
