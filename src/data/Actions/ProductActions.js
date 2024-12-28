
import * as actionType from "../actionType";
import { GetProductByIdService } from "../Services/productService";


export const GetProductByIdAction = (id) => {
    return async dispatch => {
        const {data} = await GetProductByIdService(id);
        await dispatch({type:actionType.GET_PRODUCT,payload:data});

    }
}



export const setGetProductAction = (product) => ({
    type: actionType.GET_PRODUCT,
    payload: product,
});

