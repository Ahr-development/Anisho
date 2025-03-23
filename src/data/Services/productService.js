
import api from "./httpService";
import config from "./config.json";





export const GetProductByIdService = (id) => {
    return api.get(`${config.apiLink}/api/product/getProductByIdApi/` + id);
}



export const GetProductsForMainPageService = () => {
    return api.get(`${config.apiLink}/api/product/getAllProductsForMainPage` );
}


export const AddProductToCartService = (optionsPayload, additionalData,timeSub,typeSub) => {
    return api.post(`${config.apiLink}/api/payment/handleAddToCartUser`, JSON.stringify({ optionsPayload, additionalData,timeSub,typeSub }));
}