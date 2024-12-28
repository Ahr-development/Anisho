import api from "./httpService";
import config from "./config.json";



export const GetCartService = (ServerToken, UUID) => {
    return api.post(`${config.apiLink}/api/payment/GetUserCartAllDetailsAuthAndNotAuth`, JSON.stringify({ ServerToken, UUID }));
}


export const RemoveUserCart = (ServerToken, UUID, CartId) => {
    return api.post(`${config.apiLink}/api/payment/RemoveProductInUserCartAuthAndNotAuth`, JSON.stringify({ ServerToken, UUID , CartId}));
}