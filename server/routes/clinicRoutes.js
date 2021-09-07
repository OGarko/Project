const Router = require("express");
const router = new Router();
const clinicController = require("./../controllers/clinicController");

router.get("/departments", clinicController.readDepartments);
router.get("/speciality", clinicController.readSpeciality)
router.get("/doctors", clinicController.readDoctorsAll);
router.post("/tickets/", clinicController.readTickets)
//router.get("/active/:id", clinicController.readActiveDoctors)

module.exports = router;
