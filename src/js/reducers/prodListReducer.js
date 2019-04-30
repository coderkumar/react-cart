export default function reducer(state = {
    prodList: [],
    fetching: true,
    callRequire:true
}, action) {
    switch (action.type) {
        case "FETCH_LIST_FULFILLED": {
            return {
                ...state,
                fetching: false,
                prodList: state.prodList.concat(...action.payload),
                callRequire:action.payload.length>0?true:false
            }
        }
        case "DISPOSE_LIST":{
            return{
                ...state,
                prodList: [],
                fetching: true,
                callRequire:true
            }
        }
    }
    return state;
}