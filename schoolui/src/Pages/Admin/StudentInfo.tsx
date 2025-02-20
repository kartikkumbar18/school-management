import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { CiCirclePlus } from "react-icons/ci";

interface subject {
  id: number;
  subject: string;
  marks: string;
}

const StudentInfo: React.FC = () => {
  // const [formData, setformData] = useState({});
  const [subjects, setSubjects] = useState<subject[]>(
    Array.from({ length: 6 }, (_, index) => ({
      id: index + 1,
      subject: "",
      marks: "",
    }))
  );
  const [totalMarks, setTotalMarks] = useState(0);
  const [grade, setGrade] = useState("");

  const handleAddFields = () => {
    setSubjects([...subjects, { id: subjects.length + 1, subject: "", marks: "" }]);
  };

  const handleInputChange = (id: number, field: string, value: string) => {
    const updatedSubjects = subjects.map((subject) =>
      subject.id === id ? { ...subject, [field]: value } : subject
    );
    setSubjects(updatedSubjects);
    calculateTotalAndGrade(updatedSubjects);
  };

  const calculateTotalAndGrade = (subjectsList: typeof subjects) => {
    const total = subjectsList.reduce((sum, subject) => sum + (Number(subject.marks) || 0), 0);
    setTotalMarks(total);
    
    let computedGrade = "E";
    if (total >= 90) computedGrade = "A+";
    else if (total >= 80) computedGrade = "A";
    else if (total >= 70) computedGrade = "B";
    else if (total >= 60) computedGrade = "C";
    else if (total >= 50) computedGrade = "D";
    setGrade(computedGrade);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-32 p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Fill Student Information</h1>

        {/* Basic Information Section */}
        <div className="relative mt-8 mb-4">
          <div className="border-t-4 border-amber-800"></div>
          <h2 className="absolute top-[-14px] left-1/2 transform -translate-x-1/2 bg-amber-800 text-white px-4 text-xl font-semibold">
            Basic Information
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8 ml-20">
  {[
    { label: "Student Name", type: "text", value:"studentname" },
    { label: "Father's Name", type: "text", value:"fathername" },
    { label: "Mother's Name", type: "text", value:"mothername" },
    { label: "Contact No", type: "text", value:"contactno" },
    { label: "Roll No", type: "text", value:"rollno" },
    { label: "Class ID", type: "text", value:"classid" },
    { label: "Section ID", type: "text", value:"sectionid" },
    { label: "Class Teacher", type: "text", value: "classteacher" },
    { label: "Admission Date", type: "date", value:"admissiondate" }, // Changed to date type
    { label: "Academic Year", type: "text" , value:"academicyear"},
  ].map((field, index) => (
    <div key={index} className="flex flex-col">
      <label className="text-sm font-medium mb-1">{field.label}</label>
      <input type={field.type} placeholder={field.label} value={field.value} className="w-full border p-2 rounded-lg" />
    </div>
  ))}
</div>


        {/* Subjects & Marks Section */}
        <div className="relative mt-4 mb-4">
          <div className="border-t-4 border-amber-800"></div>
          <h2 className="absolute top-[-14px] left-1/2 transform -translate-x-1/2 bg-amber-800 text-white px-4 text-xl font-semibold">
            Subjects & Marks
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 ml-20 mb-8">
          <div className="w-1/4">
            <label className="text-sm font-medium mb-1">Semester</label>
            <select className="border p-2 rounded-lg w-full">
              <option value="">Select option</option>
              <option value="FirstSemester">First Semester</option>
              <option value="SecondSemester">Second Semester</option>
              <option value="Final">Final</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {subjects.map((subject, index) => (
              <div key={subject.id} className="flex flex-row gap-4 items-end w-full">
                <div className="flex flex-col w-1/2">
                  <label className="text-sm font-medium mb-1">Subject {index + 1}</label>
                  <input
                    type="text"
                    placeholder={`Subject ${index + 1}`}
                    className="border p-2 rounded-lg w-full"
                    value={subject.subject}
                    onChange={(e) => handleInputChange(subject.id, "subject", e.target.value)}
                  />
                </div>

                <div className="flex flex-col w-1/2">
                  <label className="text-sm font-medium mb-1">Marks Obtained</label>
                  <input
                    type="number"
                    placeholder="Marks"
                    className="border p-2 rounded-lg w-full"
                    value={subject.marks}
                    onChange={(e) => handleInputChange(subject.id, "marks", e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 cursor-pointer mt-4" onClick={handleAddFields}>
            <CiCirclePlus className="text-2xl text-amber-800" />
            <span className="text-amber-800 font-semibold">Add Fields</span>
          </div>
        </div>

        {/* Total Marks & Grade */}
        <div className="flex justify-end gap-6 mt-6">
          <div className="flex flex-col w-1/4">
            <label className="text-sm font-medium mb-1">Total Marks</label>
            <input type="text" className="border p-2 rounded-lg" value={totalMarks} readOnly />
          </div>

          <div className="flex flex-col w-1/4">
            <label className="text-sm font-medium mb-1">Grade</label>
            <input type="text" className="border p-2 rounded-lg" value={grade} readOnly />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-6 mr-20">
          <button className="bg-amber-800 text-white px-6 py-2 rounded-lg font-semibold">Submit</button>
        </div>
      </div>
    </>
  );
};

export default StudentInfo;
