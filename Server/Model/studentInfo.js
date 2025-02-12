const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    contactNo: { type: String, required: true },
    rollNo: { type: String, required: true, unique: true },
    classId: { type: String, required: true },
    sectionId: { type: String, required: true },
    classTeacher: { type: String, required: true },
    admissionDate: { type: Date, required: true },
    academicYear: { type: String, required: true },
    subjects: [
        {
            subjectName: { type: String, required: true },
            totalMarks: { type: Number, required: true },
            marksObtained: { type: Number, required: true },
            percentage: { type: String, required: true },
            grade: { type: String, required: true }
        }
    ]
}, { timestamps: true });



// Create the Student model
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
