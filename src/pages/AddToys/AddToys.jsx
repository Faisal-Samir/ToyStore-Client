import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'
import UseTitle from '../../hooks/UseTitle';

const AddToys = () => {
    const { user } = useContext(AuthContext);
    console.log(user.displayName);

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategoryName = form.subCategoryName.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const addedToy = { photo, name, sellerName, sellerEmail, subCategoryName, price, rating, quantity, details };
        console.log(addedToy);

        fetch('http://localhost:5000/toys', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(addedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Toy added done',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
            })
    }
    UseTitle("Add Toy");
    return (
        <div>
            <form onSubmit={handleAddToy} className='w-1/4 mt-10 mx-auto mb-20'>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="photo" className="text-gray-700">
                            Picture URL
                        </label>
                        <input
                            type="text"
                            id="photo"
                            name="photo"
                            className="w-full py-2 pl-5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full py-2 pl-5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="sellerName" className="text-gray-700">
                            Seller Name
                        </label>
                        <input
                            type="text"
                            id="sellerName"
                            name="sellerName"
                            defaultValue={user.displayName}
                            className="w-full py-2 pl-5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="sellerEmail" className="text-gray-700">
                            Seller Email
                        </label>
                        <input
                            type="email"
                            id="sellerEmail"
                            name="sellerEmail"
                            defaultValue={user.email}
                            className="w-full py-2 pl-5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="subCategoryName" className="text-gray-700">
                            Subcategory Name
                        </label>
                        <input
                            type="text"
                            id="subCategoryName"
                            name="subCategoryName"
                            placeholder='Avenger, StarWars or Transformers'
                            className="w-full py-2 pl-5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="subCategoryName" className="text-gray-700">
                            Price
                        </label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            className="w-full py-2 pl-5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="subCategoryName" className="text-gray-700">
                            Rating
                        </label>
                        <input
                            type="text"
                            id="rating"
                            name="rating"
                            className="w-full py-2 pl-5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="subCategoryName" className="text-gray-700">
                            Available Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            className="w-full py-2 pl-5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="subCategoryName" className="text-gray-700">
                            Details
                        </label>
                        <input
                            type="text"
                            id="details"
                            name="details"
                            className="w-full py-2 pl-5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className='w-full'>
                        <input className='btn btn-block' type="submit" value="Add Toy" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddToys;