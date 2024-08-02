import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Login, { Render } from 'react-login-page';
import Logo from '../assets/coe_pic.jpeg';

// Validation schema using Yup
const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
  role: yup.string().required('Role selection is required')
});

const Demo = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // Redirect based on role
    if (data.role === 'student') {
      navigate('/report');
    } else if (data.role === 'facility_manager') {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-purple-600">
      <Login className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <Render>
          {({ fields, buttons, blocks }) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <header className="mb-6 text-center">
                  <div className="flex justify-center mb-4">{blocks.logo}</div>
                  <h2 className="text-3xl font-bold text-gray-800">{blocks.title}</h2>
                </header>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-center bg-clip-text text-transparent bg-gradient-to-r from-black-400 to-black-600 mb-2"> Username </label>
                  <input
                    {...register("username")}
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.username ? 'border-red-500' : ''}`}
                    placeholder="Please input Username"
                  />
                  {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-center bg-clip-text text-transparent bg-gradient-to-r from-black-400 to-black-600 mb-2"> Password </label>
                  <input
                    {...register("password")}
                    type="password"
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : ''}`}
                    placeholder="Please enter password"
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-center bg-clip-text text-transparent bg-gradient-to-r from-black-400 to-black-600 mb-2"> Role </label>
                  <select
                    {...register("role")}
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.role ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select Role</option>
                    <option value="student">Student</option>
                    <option value="facility_manager">Facility Manager</option>
                  </select>
                  {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="w-full py-2 mr-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="w-full py-2 ml-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          )}
        </Render>
        <Login.Block keyname="logo" tagName="span">
          <img src={Logo} alt="COE Logo" className="mx-auto h-16 w-16" />
        </Login.Block>
        <Login.Block keyname="title" tagName="span">
          Welcome, Please Sign in
        </Login.Block>
      </Login>
    </div>
  );
};

export default Demo;
