import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../RTK/Slice/loginUser";
import { AppDispatch, RootState } from "../RTK/Store";
import CenteredImageLayout from "../../Components/SideImage/CenteredImageLayout";
import bgSlide from "../../assets/bgSlide.jpg";

const validationSchema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .max(15, "Maximum 15 characters allowed"),
  password: yup
    .string()
    .min(8, "Minimum 8 characters required")
    .required("Password is required"),
});

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const result = await dispatch(loginUser(values));

      // ✅ Navigate ONLY after successful login
      if (loginUser.fulfilled.match(result)) {
        navigate("/ListingUser");
      }
    },
  });

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Back */}
      <div className="font-bold px-3 pt-4">
        <a href="/" className="text-indigo-600 hover:underline">
          ← Back
        </a>
      </div>

      {/* Form */}
      <div className="flex w-full items-center justify-center md:w-1/2 px-6">
        <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">
          <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
            Login
          </h1>

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                maxLength={15}
                {...formik.getFieldProps("username")}
                className={`w-full rounded-lg border px-4 py-2 outline-none transition-all duration-300
                  ${
                    formik.touched.username && formik.errors.username
                      ? "border-red-500 focus:ring-2 focus:ring-red-400"
                      : "border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400"
                  }`}
              />
              {formik.touched.username && formik.errors.username && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.username}
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
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.password}
                </p>
              )}
            </div>

            {/* Error */}
            {error && (
              <p className="text-center text-sm text-red-600">
                {error}
              </p>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white
                         transition-all duration-300
                         hover:bg-indigo-700 hover:shadow-lg
                         disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>

      {/* Image */}
      <div className="hidden md:block w-1/2">
        <CenteredImageLayout imageUrl={bgSlide} />
      </div>
    </div>
  );
};

export default Login;
