import { updateError, updateStart, updateSuccess } from "./userSlice";
import axios from "axios";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    // const res = await axios.post(`/update`, user);
    dispatch(updateSuccess(user))
  } catch (error) {
    dispatch(updateError());
  }
};
