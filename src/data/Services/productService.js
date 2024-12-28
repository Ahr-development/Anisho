
import api from "./httpService";
import config from "./config.json";





export const GetProductByIdService = (id) => {
    return api.get(`${config.apiLink}/api/product/getProductByIdApi/` + id);
}





export const AddProductToCartService = (optionsPayload, additionalData) => {
    return api.post(`${config.apiLink}/api/payment/handleAddToCartUser`, JSON.stringify({ optionsPayload, additionalData }));
}