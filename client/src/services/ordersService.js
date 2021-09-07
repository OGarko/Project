import axios from "axios";
import constants from "./../constants/constants";

const ordersService = {
  async getAllOrders(params) {
    try {
      const { data } = await axios.get(
        `${constants.BASE_URL + constants.ORDERS_PATH}${params}`
      );
      return data;
    } catch (e) {
      throw e;
    }
  },
  async setOrder(params) {
    try {
      const { data } = await axios.post(
        constants.BASE_URL + constants.ORDERS_PATH,
        params
      );
      return data;
    } catch (e) {
      throw e;
    }
  },
  async deleteOrder(params) {
    try {
      const response = await axios.delete(
        constants.BASE_URL + constants.ORDERS_PATH,
        { data: params }
      );
      return response.status;
    } catch (e) {
      throw e;
    }
  },
};
export default ordersService;
