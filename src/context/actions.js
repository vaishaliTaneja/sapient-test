import axios from "axios";
import _ from 'underscore';

// Set Loading
export const setLoading = (dispatch, status) =>
    dispatch({ type: "SET_LOADING", payload: status });

// Set Error
export const setError = (dispatch, error) =>
    dispatch({
        type: "SET_ERROR",
        payload: { error: error.status, message: error.message }
    });

export const getProducts = async dispatch => {
    setLoading(dispatch, true);

    await axios
        .get(`https://dnc0cmt2n557n.cloudfront.net/products.json`)
        .then(res => {
            const result = res.data.products.map(prod => {
                return _.extend(prod, {qty: 1})
            });

            dispatch({
                type: "SET_PRODUCT",
                payload: result
            });
        })
        .catch(error => {
            const result = error;

            dispatch({
                type: "SET_ERROR",
                payload: {
                    error: true,
                    message: result
                }
            });
        });
};
