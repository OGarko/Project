const clinicService = require("./../services/clinicService");
class clinicController {
  async readDepartments(req, res) {
    try {
      const data = await clinicService.getDepartments();
      return res.json(data);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async readDoctorsAll(req, res) {
    try {
      const data = await clinicService.getDoctorsAll();
      return res.json(data);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async readTickets(req, res) {
    try {
      const data = await clinicService.getTickets(req.body);
      return res.json(data);
    } catch (e) {
      console.log(e);
      res.status(500).json(e.message);
    }
  }
/*  async readActiveDoctors(req, res) {
    try {
      console.log(req.body)
      const data = await clinicService.getActiveDoctors(req.params);
      return res.json(data);
    } catch (e) {
      console.log(e);
      res.status(500).json(e.message);
    }
  }*/
  async readSpeciality (req, res) {
    try {
      const data = await clinicService.getSpeciality();
      return res.json(data);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}
module.exports = new clinicController();
