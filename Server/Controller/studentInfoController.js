const Student = require('../Model/studentInfo');

exports.addStudentInfo = async (req, res) => {
    try {
        const {
            studentName,
            fatherName,
            motherName,
            contactNo,
            rollNo,
            classId,
            sectionId,
            classTeacher,
            admissionDate,
            academicYear,
            totalMark,
            Grade,
            semester,
            subjects
        } = req.body;
        
        if (!studentName || !fatherName || !motherName || !contactNo || !rollNo || !classId || !sectionId || !classTeacher || !admissionDate || !academicYear || !totalMark || !Grade || !semester || !subjects || !Array.isArray(subjects) || subjects.length === 0) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const subjectMarks = subjects.map(({ subjectName, totalMarks, marksObtained }) => {
            const percentage = ((marksObtained / totalMarks) * 100).toFixed(2);

            let grade;
            if (percentage >= 90) grade = "A";
            else if (percentage >= 80) grade = "B";
            else if (percentage >= 70) grade = "C";
            else if (percentage >= 60) grade = "D";
            else grade = "F";

            return { subjectName, totalMarks, marksObtained, percentage, grade };
        });

        const student = new Student({
            studentName,
            fatherName,
            motherName,
            contactNo,
            rollNo,
            classId,
            sectionId,
            classTeacher,
            admissionDate,
            academicYear,
            semester,
            totalMark,
            Grade,
            subjects: subjectMarks
        });

        await student.save();

        res.status(201).json({
            message: "Student information added successfully",
            student
        });

    } catch (error) {
        console.error("Error adding student info:", error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

exports.resultmarks = async (req, res) => {
    try {
        const { academicYear, classId, semester } = req.query;

        if (!academicYear || !classId || !semester) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const students = await Student.find({ academicYear, classId, semester });

        if (students.length === 0) {
            return res.status(404).json({ message: 'No students found' });
        }

        res.status(200).json({ message: 'Student marks retrieved successfully', students });

    } catch (error) {
        console.error("Error while fetching data:", error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
