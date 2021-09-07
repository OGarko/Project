const patientsService = require("./../services/patientsService");
class patientsController {
  async createPatient(req, res) {
    try {
      const data = patientsService.addPatient(req.params, req.body);
      return res.json(data);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  async readAllPatients(req, res) {
    try {
      const data = await patientsService.getAllPatients(req.params);
      return res.json(data);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async readPatient(req, res) {
    try {
      const data = await patientsService.getPatient(req.params.id);
      return res.json(data);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async updatePatient(req, res) {
    try {
      const data = await patientsService.editPatient(req.body);
      return res.json(data);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async deletePatient(req, res) {

    console.log("req.params.id", req.params.id);
    try {
      const data = await patientsService.removePatient(req.params.id);
      return res.json(data);
    } catch (e) {;
      res.status(500).json(e.message);
    }
  }
}
module.exports = new patientsController();
