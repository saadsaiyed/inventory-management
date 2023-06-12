import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { searchProduct } from "../actions";



const ProductReport = ({ searchProduct, products, loading, error }) => {
    useEffect(() => {
        // Initial search when the component mounts
        searchProduct('initial search term');
    }, [searchProduct]);


    function handleSearch(searchTerm) {
        searchProduct(searchTerm)
        console.log("products.toString()");
        console.log(products.toString());
    }

    function handleSubmit() {
        // products._id;
    }

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
                                    onChange={(e) => handleSearch(e.target.value)}
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
                                <div className="md:block">
                                    <table>
                                        {
                                            products.map(
                                                (product, itemIdx) =>
                                                    <tr>
                                                        <td key={itemIdx}> {product.name} </td>
                                                        <td> {product.item_code} </td>
                                                    </tr>
                                            )
                                        }
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        products: state.product.products,
        loading: state.product.loading,
        error: state.product.error,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        searchProduct: (searchTerm) => dispatch(searchProduct(searchTerm)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductReport);
