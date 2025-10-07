import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa6';

function Login() {
    let navigate = useNavigate()
    const auth = getAuth();
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [passwordShow, setPasswordShow] = useState(false)

    let handleEmail = (e) => {
        setEmail(e.target.value);

    }

    let handlePassword = (e) => {
        setPassword(e.target.value);

    }

    let handleSignin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);

            });


    }
    let handleShowPass = () => {
        setPasswordShow(!passwordShow)
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-black">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input onChange={handleEmail}
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-black">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2 relative">
                            <input onChange={handlePassword}
                                id="password"
                                name="password"
                                type={passwordShow ? "text" : "password"}
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                            <div className='top-[10px] right-[10px] absolute'>
                                {passwordShow ?
                                    <IoEyeSharp onClick={handleShowPass} />
                                    : <FaEyeSlash onClick={handleShowPass} />
                                }
                            </div>
                        </div>
                    </div>

                    <div>
                        <button onClick={handleSignin}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-400">
                    Not a member?{' '}
                    <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                        Start a 14 day free trial
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Login