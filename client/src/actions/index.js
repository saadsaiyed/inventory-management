import axios from "axios";
import { FETCH_USER, SEARCH_PRODUCT } from "./types";

export const fetchUser = () =>  async dispatch => {   
    const res = await axios.get('/api/user');
    
    dispatch({ type: FETCH_USER, payload: res.data });
}
export const fetchBarcode = () =>  async dispatch => {   
    const res = await axios.get('/api/user');
    
    dispatch({ type: FETCH_USER, payload: res.data });
}
export const searchProduct = (searchTerm) => async dispatch => {
    dispatch({ type: 'SEARCH_PRODUCTS_REQUEST' });

    try {
        const response = await axios.get(`/api/product?search=${searchTerm}`);
        dispatch({ type: 'SEARCH_PRODUCTS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'SEARCH_PRODUCTS_FAILURE', payload: error.message });
    }

}