import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero mt-5 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="banner.png" className=" w-1/2 lg:w-1/3 rounded-lg shadow-2xl" />
                    <div className='px-10'>
                        <h1 className="text-5xl font-bold">Step into a World of Imagination and Fun at Toyosis</h1>
                        <p className="py-6">Welcome to our Toy Shop Services! We offer a wide range of services to enhance your toy shopping experience. Whether you're looking for expert advice, customization options, or repair services, we've got you covered. Our knowledgeable staff is here to assist you in finding the perfect toy for your needs. Whether you're looking for educational toys, outdoor play equipment, or the latest trending toys, we can provide personalized recommendations based on age, interests, and budget</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;