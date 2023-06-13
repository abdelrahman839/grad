import React from 'react'
import Logo from '../assets/logo.png'
import { useNavigate, Link } from "react-router-dom"
import axios from 'axios'
const SignIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("Please fil all fields")
    const logIn = async (e) => {
        e.preventDefault();
        if (email === "" || pass === "")
            setError(true)
        else {
            setLoading(true);
            const { data } = await axios.post("https://fly-tbum.onrender.com/sign-in", {
                email, password: pass
            }).catch(err => {
                setError(true)
                setErrorMessage(err.response.data.message)
                setLoading(false)
            })
            if (data?.token) {
                localStorage.setItem("Fly_User_Token", data.token)
                navigate('/')
            }
            setLoading(false)
        }
    }
    return (
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen flex justify-center items-center'>
            <div
                className="px-6 py-6 lg:px-8 w-1/2 max-sm:w-full bg-white rounded-lg mx-5">
                <div className="min-w-full flex justify-center items-center my-5">
                    <img className="cursor-pointer" src={Logo} alt="logo-image" onClick={() => navigate("/")} />
                </div>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input onChange={(e) => setPass(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    {error && <>
                        <p className="w-100 text-center text-red-700 m-0 p-0">{errorMessage}</p>
                    </>}
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={logIn}
                    >{loading ? "loading..." : "Login to your account"}</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to="/sign-up" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignIn