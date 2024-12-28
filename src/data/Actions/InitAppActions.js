
import * as actionType from "../actionType";



export const setModalCartControllerAction = (open) => ({
    type: actionType.OPEN_SIDEBAR_CART_MODAL,
    payload: open,
});



export const setOpenSignInModalAction = (open) => ({
    type: actionType.OPEN_SIGNIN_MODAL,
    payload: open,
});




export const setOpenAddProductCartModalAction = (open) => ({
    type: actionType.OPEN_ADD_IN_CART_MSG_MODAL,
    payload: open,
});

