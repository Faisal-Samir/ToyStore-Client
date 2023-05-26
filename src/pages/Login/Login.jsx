import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import UseTitle from '../../hooks/UseTitle';

const Login = () => {
    const { logIn, googleLogin } = useContext(AuthContext);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError("");
                navigate('/');
            })
            .catch(error => {
                console.log(error),
                    setError(error.message);
            })
    }
    const handleLoginWithGoogle = () => {
        googleLogin()
        setError("");
        navigate('/');
    }
    UseTitle("Login");
    return (
        <div className='mx-32 mt-14 '>
            <h1 className='text-center text-4xl'>Please Login</h1>
            <div className="py-10 bg-white shadow-md rounded px-20  mt-20 mb-20 w-1/2 mx-auto">
                <form onSubmit={handleLogin} className="">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name='email'
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name='password'
                            id="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <p className='text-center mb-3'>Need account to login? <Link to="/registration" className='btn-link'>Create</Link></p>
                    <div className="flex items-center justify-between">
                        <input type="submit" className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" value="Login" />
                    </div>
                    {
                        error ? <p className='mt-2 text-center text-red-600'>{error}</p> : <p className='mt-2 text-center text-green-600'>{success}</p>
                    }
                </form>
                <div className=" ">
                    <button onClick={handleLoginWithGoogle} className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2">Login with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;