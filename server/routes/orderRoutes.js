const Router = require("express");
const router = new Router();
const orderController = require("./../controllers/orderController");

router.get("/:id", orderController.readAllOrders);
router.post("/", orderController.createOrder);
router.delete("/", orderController.deleteOrder);

module.exports = router;
