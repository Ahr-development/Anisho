
import * as actionType from "../actionType";

  
export const CartReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.GET_USER_CART:
            return [...action.payload];

        default:
            return state;
    }
}