export default function reducer(state = {
    product: {},
    selVariant: {},
    fetching: true,
    selOptions:[]
}, action) {

    switch (action.type) {
        case "FETCH_PROD": {
            return { ...state, fetching: true }
        }
        case "FETCH_PROD_FULFILLED": {
            return {
                ...state,
                fetching: false,
                product: action.payload,
                selOptions:action.payload.selected_option_ids,
                selVariant:getSelectedVariant(action.payload, action.payload.selected_option_ids)
            }
        }
        case "UPDATE_SELECTION":{
            return{
                ...state,
                fetching:false,
                selOptions:action.payload,
                selVariant:getSelectedVariant(state.product, action.payload)
            }
        }
        case "DISPOSE_PRODUCT":{
            return{
                ...state,
                product: {},
                selVariant: {},
                fetching: true,
                selOptions:[]
            }
        }
    }

    function getSelectedVariant(payload, selOption){
        var variant = payload.product_variations.filter((variant) => variant.sign[0] == selOption[0] && variant.sign[1] == selOption[1]);
        if(variant && variant.length){
            return variant;
        }else{
           return payload.product_variations.filter((variant) => variant.sign[0] == selOption[1] && variant.sign[1] == selOption[0]);
        }
    }
    
    return state;
}