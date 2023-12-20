import React from 'react';
import { Formik, useFormik } from 'formik';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">Welcome to Login</h2>
        <Formik initialValues={formik.initialValues} onSubmit={formik.handleSubmit}>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="text-sm font-semibold text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-semibold text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-300"
            >
              Login
            </button>
          </form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
