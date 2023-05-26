
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import UseTitle from '../../hooks/UseTitle';

const AllToys = () => {
    const loadedAllToy = useLoaderData();
    // console.log(loadedAllToy);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();

        const form = event.target;
        const searchText = form.searchName.value;
        console.log(searchText);

        fetch(`http://localhost:5000/toys?name=${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setSearchResults(data);
            });
    };
    console.log(searchResults);

    UseTitle("All Toys");
    return (
        <div className="mt-10">
            <div className="text-center">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        name="searchName"
                        placeholder="Search by toy name"
                        className="input input-bordered input-secondary w-full max-w-xs"
                    />
                    <input type="submit" className="btn btn-info ml-5" value="Search" />
                </form>
            </div>
            <div className="mt-10">
                <h1 className="text-center text-3xl font-bold">All Toys</h1>
                <table className="mt-10 mb-20 table w-full mx-auto">
                    <thead>
                        <tr className="text-center">
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {searchResults.length > 0 ? (
                            searchResults.map((toy) => (
                                <tr key={toy._id}>
                                    <td>{toy.sellerName}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.subCategoryName}</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <td>
                                        <Link to={`/allToys/${toy._id}`}>
                                            <button className='btn btn-info'>View Details</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (

                            loadedAllToy.map(toys => <tr key={toys._id}>
                                <td>{toys.sellerName}</td>
                                <td>{toys.name}</td>
                                <td>{toys.subCategoryName
                                }</td>
                                <td>{toys.price
                                }</td>
                                <td>{toys.quantity
                                }</td>
                                <Link to={`/allToys/${toys._id}`}>
                                    <button className='btn btn-info'>View Details</button>
                                </Link>
                            </tr>)

                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
