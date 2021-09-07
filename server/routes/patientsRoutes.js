const Router = require("express");
const router = new Router();
const patientsController = require("../controllers/patientsController");

router.post("/:id", patientsController.createPatient);
router.get("/:id", patientsController.readAllPatients);
router.get("/patient/:id", patientsController.readPatient);
router.put("/", patientsController.updatePatient);
router.delete("/:id", patientsController.deletePatient);

module.exports = router;
