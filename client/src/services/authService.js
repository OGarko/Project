import axios from "axios";
import constants from "./../constants/constants";

const authService = {
  async setAccount(params) {
    try {
      const { data } = await axios.post(
        constants.BASE_URL + constants.REGISTRATION_PATH,
        params
      );
      return data;
    } catch (e) {
      // console.log(e);
      throw e;
    }
  },
  async setLogin(params) {
    try {
      const { data } = await axios.post(
        constants.BASE_URL + constants.LOGIN_PATH,
        params
      );
      return data;
    } catch (e) {
      //   console.log(e);
      throw e;
    }
  },
};
export default authService;
