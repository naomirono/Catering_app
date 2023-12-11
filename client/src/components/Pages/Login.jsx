import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '/src/assets/LoginLogo.png';
import Fariji from '/src/assets/logo.svg';
import AppLoader from '../utils/AppLoader';
import { AppError } from '../utils/AppError';


const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    // Perform your authentication logic here
    // Example: Check credentials, call an authentication API, etc.

    // For demonstration purposes, navigate to '/home' after a successful login
    // Replace this logic with your actual authentication logic
    setTimeout(() => {
      const fakeToken = 'fakeAccessToken'; // Replace with your actual token
      storeToken(fakeToken);
      navigate('/');
      setIsLoading(false);
      setPhone('');
      setPassword('');
    }, 2000); // Simulating an asynchronous operation
  };

  return (
    <div className='flex h-screen bg-white'>
      {/* Left side */}
      <div className='hidden sm:flex w-1/2 bg-[#FF9549] justify-center items-center'>
        <div className='text-center'>
          <img src={Logo} alt='logo' />
          {/* <div className='flex justify-center mt-2'>
            <img src={Fariji} alt='logo' className='h-16' />
          </div> */}
        </div>
      </div>

      {/* Right side */}
      <div className='w-full sm:w-1/2 flex justify-center items-center'>
        <div className='sm:w-96 p-5'>
        <div className='text-center'>
            <h2 className='font-fira text-medium text-4xl text-[var(--secondary)]'>
              Welcome Again
            </h2>
            <h2 className='mt-3 mb-10 text-[var(--secondary)]'>
              Connect with talented chefs
            </h2>
       </div>


          {<AppError error={errorMessage} />}

          <form onSubmit={handleSignIn}>
            <label htmlFor='email' className='text-[14px] font-inter text-[var(--tertiary)]'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              value={phone}
              name='phone'
              onChange={(e) => {
                setPhone(e.target.value)
              }}
              placeholder='Email'
              required
              className='w-full rounded-lg placeholder-[var(--primary)] mb-5 border border-[#94a3b8] px-[12px] py-[8px]'
            />
            <label htmlFor='password' className='text-[14px] font-inter text-[var(--tertiary)] mt-10'>
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              name='password'
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              placeholder='****'
              required
              className='w-full rounded-lg placeholder-[var(--primary)] border border-[#94a3b8] px-[12px] py-[8px]'
            />
            <p className='text-sm text-[var(--primary)] text-right mt-3'>
              <Link to='#'>Forgot Password</Link>
            </p>
            <button
              type='submit'
              className='bg-[var(--primary)] text-white rounded-lg py-2 px-4 w-full mt-12'
              disabled={isLoading}
            >
              {isLoading ? <AppLoader /> : 'Sign In'}
            </button>
          </form>

          <p className='font-medium text-sm text-center mt-5 text-[var(--tertiary-dark)]'>
            Already have an account? <Link to='/registration' className='text-[var(--primary)]'>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
