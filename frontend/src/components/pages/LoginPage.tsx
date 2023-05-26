/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import Logo from "../../../public/images/loan-connect-logo.png";
import { login } from "../../redux/slices/userSlice";
import { RootState } from "../../redux/store";
// import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);

    if (
      values.email === "mikolaj.cieszczyk@gmail.com" &&
      values.password === "1"
    ) {
      // toast.info("Login successful!", {});
      dispatch(login());
    } else {
      alert("wrong credentials");
    }
  };

  console.log(isLoggedIn);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {isLoggedIn ? (
        <Navigate replace to="/loans-list" />
      ) : (
        <>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img
              className="mx-auto h-20 w-auto"
              src={Logo}
              alt="loan connect logo"
            /> */}

            <h3 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
              Log into your account
            </h3>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({ errors, touched }) => (
                <Form className="max-w-md mx-auto space-y-6">
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-semibold"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 mt-2"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-gray-700 font-semibold"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        className="border border-gray-300 px-4 py-2 pr-20 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      />
                      <button
                        type="button"
                        onClick={handleTogglePassword}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500  flex space-x-1"
                      >
                        {showPassword ? (
                          <div className="tooltip" data-tip="Hide password">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                              <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                              <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                            </svg>
                          </div>
                        ) : (
                          <div className="tooltip" data-tip="Show password">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                              <path
                                fillRule="evenodd"
                                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </button>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 mt-2"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginPage;
