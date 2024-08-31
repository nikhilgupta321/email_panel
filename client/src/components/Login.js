import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => { 
  return (
      <div className='min-h-screen bg-gray-200'>
        <div className="flex items-center justify-center pt-40">
          <div className="p-6 flex flex-col gap-4 items-center justify-center shadow-lg bg-white"> 
            <div className="text-center">
              <div> <img src='./logo.png' height={180} width={230} alt='' /> </div>
              {/* <div className='text-2xl font-bold '>Login to your account</div> */}
              <p className='h-4 text-red-500'>.</p>
            </div>
            <form className="flex  flex-col  gap-2 items-right justify-center">
              <label for="username" class="form-label ">Username</label>
              <input type="text" placeholder="Username" 
                className="w-fit-content px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 " />
              <label for="password" class="form-label ">Password</label>
              <input type="password" placeholder="password"
                className="w-fit-content px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 " />
               <Link to="/email">
              <button type="submit"
                className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-900 ">Log In</button>
                </Link>
            </form>
          </div>
        </div>
      </div>   
  )
}

export default Login

