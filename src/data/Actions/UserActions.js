import * as actionType from "../actionType";




export const SetCurrentUserSignIn = (user) => ({
    type: actionType.SET_USER,
    payload: user,
});