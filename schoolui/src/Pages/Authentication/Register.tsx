import React from "react";
import CenteredImageLayout from "../../Components/SideImage/CenteredImageLayout";
import bgSlide from "../../assets/bgSlide.jpg";
import * as yup from "yup";
import { useFormik } from "formik";


const validationSchema = yup.object({
  fullName : yup
  .string()
  .matches(/^[a-zA-Z\s]+$/, "Full Name must contain only letters")
  .min(3, "Full Name must contain at least 3 charcters")
  .max(30, "Full Name must be at most 30 charcters")
  .required("Full Name is required"),

  email : yup
 .string()
 .email("invalid Email address")
 .required("Email is required")
 .max(30, "Maximum 50 charcters allowed"), 

  phoneNumber : yup
 .string()
 .matches(/^\+?[0-9]{1,15}$/, "Invalid Phone Number")
 .required("Phone Number is required")
 .max(10, "Maximum 10 charcters allowed"),

  password : yup
 .string()
 .min(8, "Password must contain at least 8 characters")
 .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character"
  )
 .required("Password is required")
 .max(30, "Maximum 30 charcters allowed"),

  confirmPassword : yup
 .string()
 .oneOf([yup.ref('password'), ""], 'Passwords must match')
 .required("Confirm Password is required")
 .max(30, "Maximum 30 charcters allowed")
})


function Register() {

const formik = useFormik({
  initialValues: {
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  },
  validationSchema,
  onSubmit: (values) => {
    console.log(values, "Form Submitted");
  },
})

  return (
<div className="flex min-h-screen">
      {/* Left Side: Register Form */}
      <div className="flex flex-col justify-center items-start px-8 md:px-16 w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-6">Register</h1>
        <form className="w-full max-w-sm" onSubmit={formik.handleSubmit}>
          {/* Full Name Input */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              {...formik.getFieldProps("fullName")}
              className="mt-1 block h-[2rem] w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your full name"
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <p className="text-red-500 text-sm">{formik.errors.fullName}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...formik.getFieldProps("email")}
              className="mt-1 block h-[2rem] w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>

          {/* Phone Number Input */}
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
            maxLength={10}
              type="text"
              id="phoneNumber"
              {...formik.getFieldProps("phoneNumber")}
              className="mt-1 block h-[2rem] w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your Phone Number"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <p className="text-red-500 text-sm">{formik.errors.phoneNumber}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
              className="mt-1 block h-[2rem] w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...formik.getFieldProps("confirmPassword")}
              className="mt-1 block h-[2rem] w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Confirm your password"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <p className="text-red-500 text-sm">{formik.errors.confirmPassword}</p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </form>

        {/* Already Have an Account Link */}
        <div className="mt-6 text-sm text-gray-600">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden md:block w-1/2 object-cover">
        <CenteredImageLayout imageUrl={bgSlide} />
      </div>
    </div>
  );
}

export default Register;
