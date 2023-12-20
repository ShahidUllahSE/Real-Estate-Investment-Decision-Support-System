import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      address: '',
      city: '',
      country: '',
      state: '',
      zipcode: '',
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
      <div className='min-h-screen p-6 bg-gray-100 flex items-center justify-center'>
        <div className='container max-w-screen-lg mx-auto'>
          <div>
            <h2 className='font-semibold text-xl text-gray-600'>Login Form</h2>
            <div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
              <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3'>
                <div className='text-gray-600'>
                  <p className='font-medium text-lg'>Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>
                <form onSubmit={formik.handleSubmit} className='lg:col-span-2'>
                  <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
                    <div className='md:col-span-5'>
                      <label htmlFor='username'>Username</label>
                      <input
                        type='text'
                        name='username'
                        id='username'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
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
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div className='text-red-600'>{formik.errors.password}</div>
                      ) : null}
                    </div>
                    <div className='md:col-span-3'>
                      <label htmlFor='address'>Address / Street</label>
                      <input
                        type='text'
                        name='address'
                        id='address'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        value={formik.values.address}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.address && formik.errors.address ? (
                        <div className='text-red-600'>{formik.errors.address}</div>
                      ) : null}
                    </div>
                    <div className='md:col-span-2'>
                      <label htmlFor='city'>City</label>
                      <input
                        type='text'
                        name='city'
                        id='city'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        value={formik.values.city}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.city && formik.errors.city ? (
                        <div className='text-red-600'>{formik.errors.city}</div>
                      ) : null}
                    </div>
                    <div className='md:col-span-2'>
                      <label htmlFor='country'>Country / region</label>
                      <input
                        name='country'
                        id='country'
                        placeholder='Country'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        value={formik.values.country}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.country && formik.errors.country ? (
                        <div className='text-red-600'>{formik.errors.country}</div>
                      ) : null}
                    </div>
                    <div className='md:col-span-2'>
                      <label htmlFor='state'>State / province</label>
                      <input
                        name='state'
                        id='state'
                        placeholder='State'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        value={formik.values.state}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.state && formik.errors.state ? (
                        <div className='text-red-600'>{formik.errors.state}</div>
                      ) : null}
                    </div>
                    <div className='md:col-span-1'>
                      <label htmlFor='zipcode'>Zipcode</label>
                      <input
                        type='text'
                        name='zipcode'
                        id='zipcode'
                        className='transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        placeholder=''
                        value={formik.values.zipcode}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.zipcode && formik.errors.zipcode ? (
                        <div className='text-red-600'>{formik.errors.zipcode}</div>
                      ) : null}
                    </div>
                    <div className='md:col-span-5'></div>
                    <div className='md:col-span-5 text-right'>
                      <div className='inline-flex items-end'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;