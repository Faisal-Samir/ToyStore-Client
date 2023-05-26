import React from 'react';

const Service = () => {
    return (
        <div>
            <section className="bg-slate-200 py-16 mb-20 mt-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
                        <p className="text-gray-600 mb-8">
                            We offer a wide range of services to enhance your toy shopping experience.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 mx-auto mb-4 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                            </svg>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Wide Selection</h3>
                            <p className="text-gray-600">
                                We offer a wide range of toys, including action figures, board games, puzzles, and more. Find your favorites!
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 mx-auto mb-4 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                />
                            </svg>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Shipping</h3>
                            <p className="text-gray-600">
                                We offer fast and reliable shipping services to ensure your toys reach you in no time.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 mx-auto mb-4 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Gift Wrapping</h3>
                            <p className="text-gray-600">
                                Make your gifts extra special with our beautiful gift wrapping service. Perfect for birthdays and special occasions!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;


