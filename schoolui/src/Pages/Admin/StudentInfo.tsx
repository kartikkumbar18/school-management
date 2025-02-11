import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';

function StudentInfo() {
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
            { label: "Student Name", placeholder: "Student Name" },
            { label: "Father's Name", placeholder: "Full Name" },
            { label: "Mother's Name", placeholder: "Full Name" },
            { label: "Contact No", placeholder: "Enter Contact No", type: "number", maxLength: 10 },
            { label: "Roll No", placeholder: "Roll No" },
            { label: "Class ID", placeholder: "Class ID" },
            { label: "Section ID", placeholder: "Section ID" },
            { label: "Class Teacher", placeholder: "Class Teacher" },
            {label : "Academic Year", placeholder: "yyyy-yyyy", type: "number"}
          ].map((field, index) => (
            <div key={index} className="flex flex-col">
              <label className="text-sm font-medium mb-1">{field.label}</label>
              <input
                type={field.type || "text"}
                placeholder={field.placeholder}
                maxLength={field.maxLength}
                className="w-full border p-2 rounded-lg"
              />
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

        <div className="grid grid-cols-2 gap-6 ml-20 mb-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex flex-row gap-4 items-end">
              <div className="flex flex-col w-[50%]">
                <label className="text-sm font-medium mb-1">Subject {index + 1}</label>
                <input type="text" placeholder={`Subject ${index + 1}`} className="border p-2 rounded-lg" />
              </div>
              <div className="flex flex-col w-[50%]">
                <label className="text-sm font-medium mb-1">Marks Obtained</label>
                <input type="text" placeholder="Marks" className="border p-2 rounded-lg" />
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button className="bg-amber-800 text-white px-6 py-2 rounded hover:bg-black">Submit</button>
        </div>
      </div>
    </>
  );
}

export default StudentInfo;
