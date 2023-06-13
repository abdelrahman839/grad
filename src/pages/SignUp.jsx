import React from 'react'
import Logo from '../assets/logo.png'
import { useNavigate, Link } from "react-router-dom"
import axios from 'axios'
const SignUp = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setlastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [cPass, setCPass] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [gender, setGender] = React.useState("male");
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("Please fil all fields")
    const register = async (e) => {
        e.preventDefault();
        if (email === "" || pass === "" || cPass === "" || firstName === "" || lastName === "")
            setError(true)
        else {
            setLoading(true);
            const { data } = await axios.post("https://fly-tbum.onrender.com/register", {
                firstName, lastName, email, password: pass, cPassword: cPass, phone, gender
            }).catch(err => {
                setError(true)
                if (err.response.data.message)
                    setErrorMessage(err.response.data.message)
                else
                    setErrorMessage(err.response.data.error)
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
            <div className="px-6 py-6 lg:px-8 w-1/2 max-sm:w-full bg-white rounded-lg mx-5">
                <div className="min-w-full flex justify-center items-center my-5">
                    <img className="cursor-pointer" src={Logo} alt="logo-image" onClick={() => navigate("/")} />
                </div>
                <form className="space-y-6" >
                    <div className='flex justify-between'>
                        <input onChange={(e) => setFirstName(e.target.value)} type="text" name="fName" id="fName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white w-5/12" placeholder="First name" required />
                        <input onChange={(e) => setlastName(e.target.value)} type="text" name="lName" id="lName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white w-5/12" placeholder="Last Name" required />
                    </div>
                    <div>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <input onChange={(e) => setPass(e.target.value)} type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <input onChange={(e) => setCPass(e.target.value)} type="password" name="cpassword" id="password" placeholder="Confirm Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex justify-between">
                        <input onChange={(e) => setPhone(e.target.value)} type="number" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Phone" required />
                        <select
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            name="gender" id="gender"
                            onChange={(e) => setGender(e.currentTarget.value)}
                        >
                            <option value="male" >male</option>
                            <option value="female" >female</option>
                        </select>
                    </div>
                    {error && <>
                        <p className="w-100 text-center text-red-700 m-0 p-0">{errorMessage}</p>
                    </>}
                    <button onClick={register} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {loading ? "loading..." : "Create your account"}
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Have account? <Link to="/sign-in" className="text-blue-700 hover:underline dark:text-blue-500">Log In</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUp