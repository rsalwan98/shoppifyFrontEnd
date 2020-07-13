// import * as actionTypes from './actions'

const initialState = {
    products : null
}

const reducer = (state=initialState,action) => {

    switch(action.type){
        // case actionTypes.STORE_PRODUCT:
        //     return Object.assign({},state,{
        //         products : action.products})
        default:
            return state;    
    }
}

export default reducer;