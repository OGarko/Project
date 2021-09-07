const orderService = require("../services/orderService");
class orderController {
  async readAllOrders(req, res) {
    try {
      const data = await orderService.getAllOrders(req.params);
      return res.json(data);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async createOrder(req, res) {
    try {
      const data = await orderService.addOrder(req.body);
      return res.json(data);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async deleteOrder(req, res) {
    try {
      const data = await orderService.removeOrder(req.body);
      return res.json(data);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}
module.exports = new orderController();
