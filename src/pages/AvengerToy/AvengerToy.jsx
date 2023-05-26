import React from 'react';
import { Link } from 'react-router-dom';

const AvengerToy = ({ avgToy }) => {
    const { photo, name, price, rating, _id } = avgToy;
    return (
        <div>
            <div className="card w-80 ml-10 lg:ml-o  lg:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Avenger" className="rounded-xl h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions">
                        <Link to={`/allToys/${_id}`}>
                            <button className='btn btn-info'>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvengerToy;