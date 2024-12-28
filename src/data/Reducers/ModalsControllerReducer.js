
import * as actionType from "../actionType";

let initialState = {
    SideBarCartModal: false,
    SignInModal: false,
    AddCartMSG: false,

};



export const ModalControlReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionType.OPEN_SIDEBAR_CART_MODAL:
            return {
                ...state,
                SideBarCartModal: action.payload,
            };
            case actionType.OPEN_SIGNIN_MODAL:
                return {
                    ...state,
                    SignInModal: action.payload,
                };

                case actionType.OPEN_ADD_IN_CART_MSG_MODAL:
                    return {
                        ...state,
                        AddCartMSG: action.payload,
                    };
      
        default:
            return state;
    }
}