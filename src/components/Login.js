import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import userlogo from './assets/userlogo.png';
import './login.css';




const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required().max(15, 'Username should not exceed 15 characters').min(3, 'Username must have at least 3 characters'),
      password: Yup.string().required().max(20, 'Password should not exceed 20 characters').min(8, 'Password must have at least 8 characters'),
      address: Yup.string(),
      city: Yup.string(),
      country: Yup.string(),
      state: Yup.string(),
      zipcode: Yup.string(),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  return (
    <div>
      <div className='min-h-screen p-6 bg-darkgray-500 flex flex-col items-center justify-center'>
        {/* Logo Section */}
        <div className='mb-6'>
          <img src={userlogo} alt='Logo' className='h-16 w-16' />
        </div>

        {/* Login Form Section */}
        <div className='container max-w-screen-lg mx-auto h-auto md:h-screen'>
          <div>
            <h2 className='font-semibold text-xl text-gray-600'>Login Form</h2>
            <div className='bg-white rounded shadow-lg p-4 px-4 md:p-8'>
              <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
                <div className='md:col-span-1'></div>
                <form onSubmit={formik.handleSubmit} className='md:col-span-3'>
                  <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
                    <div className='md:col-span-5'>
                      <label htmlFor='username'>Username</label>
                      <input
                        type='text'
                        name='username'
                        id='username'
                        className='h-10 border mt-1 rounded px-4 w-80 bg-gray-50'
                        value={formik.values.username}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.username && formik.errors.username ? (
                        <div className='text-red-600'>{formik.errors.username}</div>
                      ) : null}
                    </div>
                    <div className='md:col-span-5'>
                      <label htmlFor='password'>Password</label>
                      <input
                        type='password'
                        name='password'
                        id='password'
                        className='h-10 border mt-1 rounded px-4 w-80 bg-gray-50'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div className='text-red-600'>{formik.errors.password}</div>
                      ) : null}
                    </div>
                    <div className='md:col-span-5'></div>
                    <div className='md:col-span-5 text-right'>
                      <div className='inline-flex items-start'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className='md:col-span-1'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
