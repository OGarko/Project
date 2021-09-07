const authService = require("./../services/authService");
const bcrypt = require("bcrypt");
class authController {
  async createAccount(req, res) {
    console.log(req.body)
    try {
      const data = await authService.addAccount(req.body);
      return res.json(data);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async activate(req, res) {
    try {
      const data = await authService.getAccount(req.body);
      return res.json(data);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}
module.exports = new authController();
