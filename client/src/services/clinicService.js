import axios from "axios";
import constants from "./../constants/constants";

const clinicService = {
  async getDepartments() {
    try {
      const URL = constants.BASE_URL + constants.CLINIC_DAPERTMENTS_PATH;
      console.log(URL);
      const res = await axios.get(URL, {
        method: "GET",
      });
      return res.data;
    } catch (e) {
      throw e;
    }
  },
  async getDoctors() {
    try {
      const res = await axios.get(
        constants.BASE_URL + constants.CLINIC_DOCTORS_PATH
      );
      return res.data;
    } catch (e) {
      throw e;
    }
  },
  async getActiveDoctors(params) {
    try {
      const res = await axios.get(
        `${constants.BASE_URL + constants.CLINIC_ACTIVE_DOCTORS_PATH}${params}`
      );
      return res.data;
    } catch (e) {
      throw e;
    }
  },
  async getTickets(params) {
    try {
      const { data } = await axios.post(
        constants.BASE_URL + constants.CLINIC_TICKETS_PATH,
        params
      );
      return data;
    } catch (e) {
      throw e;
    }
  },
  async getSpeciality() {
    try {
      const { data } = await axios.get(
        constants.BASE_URL + constants.CLINIC_SPECIALITY_PATH
      );
      return data;
    } catch (e) {
      throw e;
    }
  },
};
export default clinicService;
