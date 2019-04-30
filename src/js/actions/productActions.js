import axios from "axios";

export function fetchProduct(prodId){
    return function(dispatch){
        //dispatch({type: "FETCH_PROD"});
        axios.get("https://assignment-appstreet.herokuapp.com/api/v1/products/" + prodId)
        .then((response) =>{
            dispatch({type: "FETCH_PROD_FULFILLED", payload: response.data})
        })
    }
}

export function updateSelection(data){
    return function(dispatch){
    dispatch({type: "UPDATE_SELECTION", payload:data})
    }
}

export function disposeProduct(){
    return function(dispatch){
    dispatch({type: "DISPOSE_PRODUCT"})
    }
}
