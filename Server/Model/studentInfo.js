const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentName: {   // Fix: Change `studentname` to `studentName` (to match controller)
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true,
        unique: true
    },
    classId: {
        type: String,
        required: true,
    },
    sectionId: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    totalMarks: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    marksObtained: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    grade: {
        type: String,
        required: true,
        enum: ["A", "B", "C", "D", "F"]
    },
    academicYear : {
      type: String,
      required: true,
    },
    exam : {
      type: String,
      required: true,
    }
});

// Create the Student model
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
