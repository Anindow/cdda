"use client"

import Image from "next/image"
import { useForm } from "react-hook-form"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(errors)
  return (
    <div className='flex items-center h-full'>
      <div className='w-1/2 flex-col '>
        <div className='w-2/3 flex flex-col ml-auto'>
          <Image
            src='/Logo.svg'
            className='w-[132px] h-[56px]'
            width={100}
            height={100}
          />

          <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-semibold my-4'>Get started now ✨</h1>
            <p className='mb-4 text-center'>
              Lorem ipsum dolor sit amet consectetur. Hendrerit vulputate vitae
              gravida risus rhoncus. Montes nam amet.
            </p>

            <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor='name' className='mb-1 font-semibold '>
                Full name
              </label>
              <div className='relative'>
                <input
                  className='border border-gray-300 p-2 pl-10 rounded-md mb-3 bg-gray-50 w-full'
                  type='text'
                  id='name'
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[\w\.-]+@[\w\.-]+\.\w+$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  placeholder='Please enter your Email'
                />
                <Image className='absolute left-3 top-2 w-6 h-6' src="./user.svg" alt="user icon" height={100} width={100} />
            
              </div>

              {errors?.email && (
                <p className='text-sm italic text-red-500'>
                  {errors?.email?.message}
                </p>
              )}
              <label htmlFor='email' className='mb-1 font-semibold'>
                Email
              </label>
              <div className='relative'>
                <input
                  className='border border-gray-300 p-2 pl-10 rounded-md mb-3 bg-gray-50 w-full'
                  type='text'
                  id='email'
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[\w\.-]+@[\w\.-]+\.\w+$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  placeholder='Please enter your Email'
                />
                <Image className='absolute left-3 top-2 w-6 h-6' src="./mail.svg" alt="mail icon" height={100} width={100} />
            
              </div>

              {errors?.email && (
                <p className='text-sm italic text-red-500'>
                  {errors?.email?.message}
                </p>
              )}

              <label htmlFor='password' className='mb-1 font-semibold'>
                Password
              </label>
              <div className='relative'>
                <input
                  className='border border-gray-300 p-2 pl-10 rounded-md mb-6 w-full bg-gray-50'
                  type='password'
                  id='password'
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder='Please enter your password'
                />
                 <Image className='absolute left-3 top-2 w-6 h-6' src="./lock.svg" alt="mail icon" height={100} width={100} />
                 <Image  className='absolute right-3 top-2 w-6 h-6' src="./eye-slash.svg" alt="mail icon" height={100} width={100} />
              
              </div>

              {errors?.password && (
                <p className='text-sm italic text-red-500'>
                  {errors?.password?.message}
                </p>
              )}
              
              <label htmlFor='role' className='mb-1 text-xl my-4 '>
                Select type of your role
              </label>
              <div className="my-5">
                <label className='inline-flex items-center h-[44px] w-[218px] border-2 rounded-md justify-center bg-blue-50 border-blue-600'>
                  <input
                    className=" "
                    type='radio'
                    value='admin'
                    {...register("role")}
                  />
                  <span className='ml-2 gap-16 '>Admin</span>
                </label>
                <label className='inline-flex items-center h-[44px] w-[218px] border-2 rounded-md justify-center ml-6 '>
                  <input
                    type='radio'
                    value='user'
                    {...register("role")}
                  />
                  <span className='ml-2'>User</span>
                </label>
                </div>

              <div className='flex items-center justify-between '>
              <div className='mb-3'>
  <label className='flex items-center '>
    <input
      className="mr-2 rounded-sm"
      id='checked-checkbox'
      type='checkbox'
     
    />
    
    I agree to all the <span className="text-blue-600 mx-1"> term, Privacy Policy</span>and<span className="text-blue-600 mx-1"> Fees.</span> 
  </label>
</div>




                
              </div>

              <button
                type='submit'
                className='bg-blue-600 text-white py-2 rounded-md font-semibold my-8 w-full'
              >
                Sign Up
              </button>

              <p className=' text-sm text-gray-600 flex justify-center'>
              Already have an account? 
                <a href='/login' className='text-blue-600 underline'>
                Log in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className='w-1/2 relative flex justify-end'>
        <Image
          src='/f1e686dbacdd64c046f21b3b231fbdf5.jpg'
          alt='not me'
          // className='min-w-[720px] object-fill'
          width='850'
          height='1024'
        />
      

        <div className='absolute w-2/3  flex bottom-20 rounded-lg p-4 right-20 text-white bg-black bg-opacity-20 border border-r-0 backdrop-blur-sm  bg-opacity-50'>
          <p className='text-base'>
            Given a full text query such as "rotes Kleid", our approach
            retrieves matching product images. You can try different queries in
            the demo and visually inspect retrieved images.
            <br />
            <br />
            <span className=''>Cameron Williamson</span>
            <br />
            <span className='text-sm'>Founder, Logobly</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
