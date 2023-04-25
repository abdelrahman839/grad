import React from 'react'
import Logo from '../assets/logo.png'
import { motion } from "framer-motion"
import { fadeIn } from '../utils/motion'
import { useNavigate, Link } from "react-router-dom"

const SignUp = () => {
    return (
        <div
            className='bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen flex justify-center items-center'
        >

            <motion.div
                className="px-6 py-6 lg:px-8 w-1/2 max-sm:w-full bg-white rounded-lg mx-5">
                <div className="min-w-full flex justify-center items-center my-5">
                    <img className="cursor-pointer" src={Logo} alt="logo-image" onClick={() => navigate("/")} />
                </div>
                <form className="space-y-6" >
                    <div className='flex justify-between'>
                        <input type="text" name="fName" id="fName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white w-5/12" placeholder="First name" required />
                        <input type="text" name="lName" id="lName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white w-5/12" placeholder="Last Name" required />
                    </div>
                    <div>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>

                    <div>
                        <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="Confirm Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>

                    <div className="flex justify-between">
                        <input type="number" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Phone" required />
                        <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        name="gender" id="gender">
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>

                    </div>


                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Have account? <Link to="/sign-in" className="text-blue-700 hover:underline dark:text-blue-500">Log In</Link>
                    </div>
                </form>
            </motion.div>



        </div>
    )
}

export default SignUp