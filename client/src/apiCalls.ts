import {
    signupStart,
    signupSuccess,
    signupFailure,
    signinStart,
    signinSuccess,
    signinFailure,
} from './features/user/userSlice';
import { publicRequest } from './requestMethods';

export const signup = async (
    dispatch,
    user: { username: string | false; email: string | false; password: string | false },
) => {
    dispatch(signupStart());
    try {
        const res = await publicRequest.post('/auth/signup', user);
        dispatch(signupSuccess(res.data));
    } catch (error) {
        console.log(error);
        dispatch(signupFailure);
    }
};

export const signin = async (dispatch, user: { username: string | false; password: string | false }) => {
    dispatch(signinStart());
    try {
        const res = await publicRequest.post('/auth/signin', user);
        dispatch(signinSuccess(res.data));
    } catch (error) {
        console.log(error);
        dispatch(signinFailure());
    }
};
