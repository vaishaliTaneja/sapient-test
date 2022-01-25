export const Reducer = (state, action) => {
    switch (action.type) {
        case "SET_PRODUCT":
            return {
                ...state,
                products: action.payload
            };
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload.error,
                message: action.payload.message
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            };
        case "INCREMENT":
            return {
                ...state,
                products: state.products.filter((c) =>
                    c.id === action.payload.id ? (c.qty = ++c.qty) : c.qty
                )
            };
        case "DECREMENT":
            return {
                ...state,
                products: state.products.filter((c) =>
                    c.id === action.payload.id ? (c.qty = --c.qty) : c.qty
                )
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                products: state.products.filter((c) => c.id !== action.payload.id),
            };
        default:
            return state;
    }
};
