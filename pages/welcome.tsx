import React, { ReactElement, ReactNode } from 'react';
import AuthLayout from '@/layouts/AuthLayout';
import Link from 'next/link';
import BaseInput, { PasswordInput } from '@/components/Base';
import Image from 'next/image';
const initialFormData = Object.freeze({});

const SignUp = () => {
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleForm = () => {};

  const onchange = (e: any) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form
        className=' mt-28 mb-5 flex flex-col justify-start items-start px-9 gap-4 w-full'
        method='post'
        onSubmit={handleForm}
      >
        <h5 className='font-semibold text-[35px] leading-[150%]'>
          Welcome Back to
        </h5>
        <h5 className='font-semibold text-[35px] leading-[150%]'>
          <Link href='/'>
            <a className='text-primary'> Lize Transport </a>
          </Link>{' '}
          International
        </h5>
        <p className='text-lg font-normal text-gray '>
          Enter email and password to login your account.
        </p>
        <BaseInput
          inputType='email'
          identifier='email'
          label='Your Email'
          groupClass='pb-[10px]'
          onchange={(e) => onchange(e)}
        />
        <PasswordInput
          showPassword={true}
          identifier='password'
          label='password'
          onchange={(e) => onchange(e)}
        />
        <div className=' w-full flex justify-between'>
          <div className='flex flex-row gap-[10px] items-center'>
            <input
              type='checkbox'
              name='remember'
              id='remember'
              className=' w-[30px] h-[30px] rounded-[10px] !ring-transparent checked:bg-primary text-primary'
            />
            <label
              className='text-black-secondary text-lg font-normal'
              htmlFor='remember'
            >
              Remember me
            </label>
          </div>
          <Link href='/'>
            <a className=' text-lg font-normal text-[#84878B] capitalize '>
              forgot password?
            </a>
          </Link>
        </div>
        <button
          type='submit'
          className='btn-primary flex w-[100%] justify-center items-center my-5'
        >
          sign up
        </button>
      </form>
      <div className=' w-full flex flex-row justify-between items-center px-9 '>
        <span className='w-[240px] h-px bg-gray/40 ' />
        <p className='capitalize text-sm text-gray '>
          &nbsp; instant login &nbsp;
        </p>
        <span className='w-[240px] h-px bg-gray/40 ' />
      </div>
      <div className='my-10 flex w-full justify-between px-9 '>
        <button className=' py-[10px] px-10 rounded-[30px] border border-gray/40 flex flex-row justify-center items-center capitalize '>
          {' '}
          <div className=' w-10 h-10 mr-3 relative '>
            <Image src='/Google.svg' alt='' layout='fill' objectFit='contain' />
          </div>{' '}
          sign in with google{' '}
        </button>
        <button className=' py-[10px] px-10 rounded-[30px] border border-gray/40 flex flex-row justify-center items-center capitalize '>
          {' '}
          <div className=' w-10 h-10 mr-3 relative '>
            <Image
              src='/Facebook.svg'
              alt=''
              layout='fill'
              objectFit='contain'
            />{' '}
          </div>{' '}
          sign in with facebook{' '}
        </button>
      </div>
      <div className='flex w-full items-center justify-center text-lg '>
        <p className=' font-normal text-gray '>Don’t have any account?&nbsp;</p>
        <Link href='/'>
          <a className='capitalize text-primary'> Sign Up</a>
        </Link>
      </div>
    </>
  );
};

export default SignUp;

SignUp.defineLayout = (page: ReactElement, props: any): ReactNode => {
  return <AuthLayout>{page}</AuthLayout>;
};
