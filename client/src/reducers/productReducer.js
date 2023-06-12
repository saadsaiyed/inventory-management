const initialState = {
    products: [],
    loading: false,
    error: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_PRODUCTS_REQUEST':
            return { ...state, loading: true, error: null };
        case 'SEARCH_PRODUCTS_SUCCESS':
            return { ...state, loading: false, products: action.payload };
        case 'SEARCH_PRODUCTS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default productReducer;
