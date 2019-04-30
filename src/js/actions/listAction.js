import axios from "axios";

export function fetchProductList(pageNo) {
    return function (dispatch) {
        axios.get("https://assignment-appstreet.herokuapp.com/api/v1/products?page=" + pageNo)
            .then((response) => {
                dispatch({ type: "FETCH_LIST_FULFILLED", payload: response.data.products })
            })
            .catch((err) => {
                dispatch({ type: "FETCH_PROD_REJECTED", payload: err })
            })
    }
}

export function disposeList() {
    return function (dispatch) {
        dispatch({ type: "DISPOSE_LIST" })
    }
}