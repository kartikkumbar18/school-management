import React from "react";
import CenteredImageLayout from "../../Components/SideImage/CenteredImageLayout";
import bgSlide from "../../assets/bgSlide.jpg";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginUser } from "../RTK/Slice/loginUser";
import { AppDispatch } from "../RTK/Store";



const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email address is required")
    .max(15, "Maximum 15 charcters allowed"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(30, "Password 30 charcters allowed")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one or more lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
    .required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values)); // ✅ API call here
      console.log(values, "Login Values");
    },
  });

  return (
<div className="flex min-h-screen bg-gray-100">
  <div className="font-bold px-3 pt-4">
    <a href="/" className="text-indigo-600 hover:underline">
      ← Back
    </a>
  </div>

  <div className="flex w-full items-center justify-center md:w-1/2 px-6">
    <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">
      <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Login
      </h1>

      <form onSubmit={formik.handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            maxLength={15}
            {...formik.getFieldProps("email")}
            className={`w-full rounded-lg border px-4 py-2 outline-none transition-all duration-300
              ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500 focus:ring-2 focus:ring-red-400"
                  : "border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400"
              }`}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="mt-1 text-sm text-red-500 animate-pulse">
              {formik.errors.email}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            maxLength={30}
            {...formik.getFieldProps("password")}
            className={`w-full rounded-lg border px-4 py-2 outline-none transition-all duration-300
              ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500 focus:ring-2 focus:ring-red-400"
                  : "border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400"
              }`}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="mt-1 text-sm text-red-500 animate-pulse">
              {formik.errors.password}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white
                     transition-all duration-300
                     hover:bg-indigo-700 hover:shadow-lg
                     disabled:cursor-not-allowed disabled:opacity-60"
        >
          {formik.isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  </div>

  <div className="hidden md:block w-1/2">
    <CenteredImageLayout imageUrl={bgSlide} />
  </div>
</div>

  );
};

export default Login;
