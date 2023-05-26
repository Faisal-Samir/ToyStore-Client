import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <div className='mt-20'>
                <img className='mx-auto' src="error.gif" alt="" />
            </div>
            <div className='text-center mt-5'>
                <Link to='/'><button className='btn btn-success'>back to home</button></Link>
            </div>
        </div>
    );
};

export default Error404;