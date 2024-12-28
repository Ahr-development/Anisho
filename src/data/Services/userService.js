
import api from "./httpService";
import config from "./config.json";






export const IsFoundUser = (mobile) => {
    return api.post(`${config.apiLink}/api/user/CheckUserIsNew`, JSON.stringify({ mobile }));
};



export const GetUserByServerCode = (serverCode, roleId, token,UUID) => {
    return api.post(`${config.apiLink}/api/user/GetUserByServerCode`, JSON.stringify({ serverCode, roleId, token,UUID }));
  };
  
  
  
  export const SignInUserByMobile = (mobile) => {
    return api.post(`${config.apiLink}/api/user/SignInByMobile`, JSON.stringify({ mobile }));
  };
  
  
  
  
  export const RegisterUser = (mobile, Name, ActiveCode,UUID,Email) => {
    return api.post(`${config.apiLink}/api/user/SignUpNewUser`, JSON.stringify({ mobile, Name, ActiveCode, UUID,Email }));
  };
  
  
  
  export const ResumeSignInUserByMobileAndGetToken = (mobile, activecode,UUID) => {
    return api.post(`${config.apiLink}/api/user/ResumeSignInByMobile`, JSON.stringify({ mobile, activecode,UUID }));
  };