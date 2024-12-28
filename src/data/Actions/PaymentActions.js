import * as actionType from "../actionType";
import { GetCartService } from "../Services/paymentService";




export const GetUserCartAction = (ServerToken,UUID) => {
    return async dispatch => {
        const {data} = await GetCartService(ServerToken,UUID);
        console.log(data);
        await dispatch({type:actionType.GET_USER_CART,payload:data});

    }
}
