import React from "react";
import CenteredImageLayout from "../../Components/SideImage/CenteredImageLayout";
import bgSlide from "../../assets/bgSlide.jpg";
import * as yup from "yup";
import { useFormik } from "formik";


const validationSchema = yup.object({
  email: yup.string()
   .email("Invalid email address")
   .required("Email address is required")
   .max(15, "Maximum 15 charcters allowed"),
  password: yup.string()
   .min(8, "Password must be at least 8 characters")
   .max(30,"Password 30 charcters allowed")
   .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
   .matches(/[a-z]/, "Password must contain at least one or more lowercase letter")
   .matches(/[0-9]/, "Password must contain at least one number")
   .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
   .matches(/^\s*$/,"password must not contain spaces")
   .required("Password is required")
})

const  Login = ()  => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Submit the form
      console.log(values, "Login Values");
    }
  })

  return (
    <div className="flex min-h-screen">
        <div className="font-bold px-3">
            <a href="/">Back</a>
        </div>
      {/* Left Side: Login Form */}
      <div className="flex flex-col justify-center items-start px-8 md:px-16 w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <form className="w-full max-w-sm">
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
            maxLength={15}
              type="email"
              id="email"
              className={`mt-1 block h-[2rem] w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                formik.touched.email && formik.errors.email ? "border-red-500" : ""
              }`}
              placeholder="Enter your email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              maxLength={30}
              type="password"
              id="password"
              className={`mt-1 block h-[2rem] w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                formik.touched.password && formik.errors.password ? "border-red-500" : ""
              }`}
              placeholder="Enter your password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>
          {/* Login Button */}
          <button
            type="submit"
            onClick={() => alert("Login")}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
        {/* Forgot Password & Create Account Links */}
        <div className="mt-6 text-sm text-gray-600">
          <p>
            <a href="/forgotPassword" className="text-indigo-600 hover:underline">
              Forgot Password?
            </a>
          </p>
          <p className="mt-2">
            Don’t have an account?{" "}
            <a href='/register' className="text-indigo-600 hover:underline">
              Create Account
            </a>
          </p>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden md:block w-1/2  object-cover">
        <CenteredImageLayout  imageUrl={bgSlide} />
      </div>
    </div>
  );
}

export default Login;
