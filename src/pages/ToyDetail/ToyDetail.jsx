import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import UseTitle from '../../hooks/UseTitle';

const ToyDetail = () => {
    const loadToy = useLoaderData();
    
    console.log(loadToy);
    UseTitle("Toy Details");
    return (
        <div className='mt-10 mb-10'>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={loadToy.photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Toy Name: {loadToy.name}</h2>
                    <p>Seller Name: {loadToy.sellerName}</p>
                    <p>Seller Email: {loadToy.sellerEmail}</p>
                    <p>Ratting: {loadToy.rating}</p>
                    <p>Price: {loadToy.price}</p>
                    <p>Available Quantity: {loadToy.quantity}</p>
                    <p>Details: {loadToy.details}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetail;