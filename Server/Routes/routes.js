const express = require("express")

const router = express.Router();

// Add a new student
const { addStudentInfo, resultmarks }  = require("../Controller/studentInfoController");

router.post("/addStudent", addStudentInfo);
router.get("/result-marks", resultmarks);

module.exports = router;
