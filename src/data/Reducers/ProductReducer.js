


import * as actionType from "../actionType";

  
export const ProductReducer = (state = {}, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCT:
            return {...action.payload};

        default:
            return state;
    }
}