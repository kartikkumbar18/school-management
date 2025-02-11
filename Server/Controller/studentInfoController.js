const Student = require('../Model/studentInfo');

exports.addStudentMarks = async (req, res) => {
    try {
        const {
            studentName,
            rollno,
            classId,
            sectionId,
            subject,
            totalMarks,
            marksObtained,
            academicYear,
            exam,
        } = req.body;

        if (!studentName || !rollno || !classId || !sectionId || !subject || !totalMarks || !marksObtained || !academicYear || !exam) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        const percentage = ((marksObtained / totalMarks) * 100).toFixed(2);

        let grade;
        if (percentage >= 90) grade = "A";
        else if (percentage >= 80) grade = "B";
        else if (percentage >= 70) grade = "C";
        else if (percentage >= 60) grade = "D";
        else grade = "F";

        // Create new student record
        const student = new Student({
            studentName,
            rollno,
            classId,
            sectionId,
            subject,
            totalMarks,
            marksObtained,
            percentage,
            academicYear,
            exam,
            grade
        });

        await student.save();

        res.status(201).json({
            message: "Student marks added successfully",
            student
        });

    } catch (error) {
        console.error("Error adding marks:", error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

exports.resultmarks = async(req, res) => {
       try {
            const {academicYear, classId, exam} = req.query;

            if(!academicYear || !classId || !exam){
                return res.status(400).json({ message: 'All fields are required' });
            }

            const students = await Student.find({academicYear, classId, exam});
            if(students.length === 0) {
                return res.status(404).json({ message: 'No students found' });
            }
            
            res.status(200).json({ message: 'Student marks retrieved successfully', students });


       } catch (error) {
        console.log("error while fetching data", error);
        res.status(500).json({ message: 'Server Error', error: error.message });
       }
    };

    
