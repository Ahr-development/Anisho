import { combineReducers } from "redux";
import { ModalControlReducer } from "./ModalsControllerReducer";
import { ProductReducer } from "./ProductReducer";
import { UserReducer } from "./UserReducer";
import { CartReducer } from "./CartReducer";




export const reducers = combineReducers({
    IModalController : ModalControlReducer,
    IProduct : ProductReducer,
    IUser : UserReducer,
    ICart : CartReducer,
    
});
