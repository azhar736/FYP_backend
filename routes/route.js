const router = require("express").Router();
const createAdmin = require("../controller/adminController");
router.get("/", createAdmin);

module.exports = router;
