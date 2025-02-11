const express = require("express")

const router = express.Router();

// Add a new student
const { addStudentMarks, resultmarks }  = require("../Controller/studentInfoController");

router.post("/addStudent", addStudentMarks);
router.get("/result-marks", resultmarks);

module.exports = router;
