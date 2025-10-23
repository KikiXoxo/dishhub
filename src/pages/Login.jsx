import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { RiLock2Line } from 'react-icons/ri';
import Logo from '../components/Logo';
import { FaRegUser } from 'react-icons/fa6';

const Login = () => {
  const [email] = useState('user@example.com');
  const [password] = useState('password123');
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    setTimeout(() => {
      navigate('/dashboard');
    }, 750);
  };

  return (
    <div className='flex h-full'>
      <div
        className='hidden lg:block lg:w-1/2 bg-cover bg-center'
        style={{ backgroundImage: "url('/login-image.jpg')" }}
      ></div>

      <div className='w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50 text-gray-700 dark:bg-gray-900'>
        <div className='w-full max-w-md space-y-4'>
          <div className='flex justify-center'>
            <Logo />
          </div>

          <p className='pb-8 text-center italic dark:text-gray-300'>
            Browse thousands of delicious recipes
          </p>

          <form className='space-y-6' onSubmit={handleLogin}>
            {/* Inputs */}
            <div className='space-y-4'>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium dark:text-gray-300'
                >
                  Email
                </label>
                <div className='relative'>
                  <FaRegUser className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500' />
                  <input
                    id='email'
                    type='email'
                    value={email}
                    readOnly
                    className='mt-1 block w-full rounded-md border border-gray-300 pl-10 pr-3 py-3 text-gray-900 text-sm shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-indigo-900'
                  />
                </div>
              </div>

              <div className='space-y-1'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium dark:text-gray-300'
                >
                  Password
                </label>
                <div className='relative'>
                  <RiLock2Line className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500' />
                  <input
                    id='password'
                    type='password'
                    value={password}
                    readOnly
                    className='mt-1 block w-full rounded-md border border-gray-300 pl-10 pr-3 py-3 text-gray-900 text-sm shadow-sm focus:outline-indigo-900 dark:bg-gray-800 dark:text-white dark:border-gray-600'
                  />
                </div>
                <p className='text-right text-sm text-indigo-600 dark:text-indigo-400'>
                  Forgot password?
                </p>
              </div>
            </div>

            <button
              type='submit'
              className='w-full rounded-md bg-indigo-900 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-950 focus:outline-none transition'
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
