import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StarWarToy = ({ starToy }) => {
    const { user } = useContext(AuthContext);
    const navigator = useNavigate();

    const { photo, name, price, rating, _id } = starToy;

    const handleViewDetails = () => {
        if (user) {
            navigator(`/allToys/${_id}`);
        } else {
            toast.error('Please log in to view details.');
            navigator('/login'); // Redirect to the login page
        }
    };

    return (
        <div className='mx-auto'>
            <div className="card w-80 ml-10 lg:ml-o  lg:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Avenger" className="rounded-xl h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions">
                        {/* <Link to={`/allToys/${_id}`}> */}
                            <button className='btn btn-info' onClick={handleViewDetails}>View Details</button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StarWarToy;

