import axios from "axios";
import constants from "./../constants/constants";

const patientService = {
  async getAllPatients(params) {
    try {
      const { data } = await axios.get(
        `${constants.BASE_URL + constants.PATIENTS_PATH}/${params}`
      );
      return data;
    } catch (e) {
      throw e;
    }
  },
  async getPatient() {
    try {
      const { data } = await axios.get(
        constants.BASE_URL + constants.PATIENTS_PATH
      );
      return data;
    } catch (e) {
      throw e;
    }
  },
  async deletePatient(params) {
    try {
      const { status } = await axios.delete(
        `${constants.BASE_URL + constants.PATIENTS_PATH}/${params}`
      );
      return status;
    } catch (e) {
      throw e;
    }
  },
  async updatePatient(params) {
    try {
      const { data } = await axios.put(
        constants.BASE_URL + constants.PATIENTS_PATH,
        params
      );
      return data;
    } catch (e) {
      throw e;
    }
  },
  async createPatient(params, id_user) {
    try {
      await axios.post(
        `${constants.BASE_URL + constants.PATIENTS_PATH}/${id_user}`,
        params
      );
    } catch (e) {
      throw e;
    }
  },
};
export default patientService;
