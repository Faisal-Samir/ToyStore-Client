import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <nav className="bg-gray-400 py-4">
                <div className="container mx-auto lg:flex items-center justify-around">
                    {/* Company Name */}
                    <div className="text-white font-bold text-2xl text-center lg:text-left mb-2 lg:mb-0">
                        𝔱𝔬𝔶𝔬𝔰𝔦𝔰
                    </div>

                    {/* Company Logo */}
                    <div className="flex items-center justify-center">
                        <img src="toy_logo.png" alt="Company Logo" className="w-16 h-16" />
                    </div>

                    {/* Navigation Links */}
                    <div className="space-x-1 lg:space-x-4 text-white flex justify-center items-center">
                        <Link to="/" className="">Home</Link>
                        <Link to="/allToys" className="">All Toys</Link>
                        <Link to="/blogs" className="">Blogs</Link>
                        {
                            user ? <div className='flex gap-4 items-center justify-center'>
                                <Link to="/addToys" className="">Add a toy</Link>
                                <Link to="/myToy" className="">My toys</Link>
                                <img className='w-12 h-12 rounded-full' title={user.displayName} src={user.photoURL} alt="" />
                                <button onClick={handleLogout}>Logout</button>
                            </div> : <>
                                <Link to="/login" className="">Login</Link>
                                <Link to="/registration" className="">Registration</Link>
                            </>
                        }

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;