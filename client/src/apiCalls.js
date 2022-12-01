import {
  signinStart,
  signinSuccess,
  signinFailure,
} from './features/user/userSlice';
import { publicRequest } from './requestMethods';

export const signin = async (dispatch, user) => {
  dispatch(signinStart());
  try {
    const res = await publicRequest.post('/auth/signin', user);
    dispatch(signinSuccess(res.data));
  } catch (error) {
    console.log(error);
    dispatch(signinFailure());
  }
};
