import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import UseTitle from '../../hooks/UseTitle';

const Registration = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password, photo);
        signUp(email, password)
            .then(result => {
                const registeredUser = result.user;
                console.log(registeredUser);
                event.target.reset();
                setSuccess("Registration done successfully");
                setError("");
                navigate('/');
                window.location.reload();
                profile(result.user, name, photo);

            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

        const profile = (user, name, photo) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photo
            })
                .then(() => {
                    console.log('updated');
                })
                .catch(error => {
                    console.log(error.message);
                })
        }
    }


    UseTitle("Registration");
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-10'>Registration</h1>
            <div className="flex items-center justify-center mt-20 mb-20">
                <form onSubmit={handleRegistration} className="py-10 w-1/3 bg-white shadow-md rounded px-20">
                    {/* name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name='name'
                            id="name"
                            type="name"
                            placeholder="Name"
                            required
                        />
                    </div>
                    {/* email */}
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
                            required
                        />
                    </div>
                    {/* password */}
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
                            required
                        />
                    </div>
                    {/* photo */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
                            Photo
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name='photo'
                            id="photo"
                            type="text"
                            placeholder="Photo Url"
                            required
                        />
                    </div>
                    <p className='text-center mb-3'>Already have an Account? <Link to="/login" className='btn-link'>Login</Link></p>
                    <div className="flex items-center justify-between">
                        <input type="submit" className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" value="Registration" />
                    </div>
                    {
                        error ? <p className='mt-2 text-center text-red-600'>{error}</p> : <p className='mt-2 text-center text-green-600'>{success}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default Registration;