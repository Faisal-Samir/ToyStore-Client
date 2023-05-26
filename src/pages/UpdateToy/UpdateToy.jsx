import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
import UseTitle from '../../hooks/UseTitle';

const UpdateToy = () => {
    const loadToyForEdit = useLoaderData();
    console.log(loadToyForEdit.details);

    const loadUpdateBtn = event => {
        event.preventDefault();
        const form = event.target;

        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const updateToy = { price, quantity, details };
        console.log(updateToy);

        fetch(`http://localhost:5000/toys/${loadToyForEdit._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Toy Details Update done',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    UseTitle("Update Toy");
    return (
        <div>
            <form onSubmit={loadUpdateBtn} className='w-1/4 mt-10 mb-20 mx-auto'>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="photo" className="text-gray-700">
                            Price
                        </label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            defaultValue={loadToyForEdit.price}
                            className="w-full py-2 pl-5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="photo" className="text-gray-700">
                            Available Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            defaultValue={loadToyForEdit.quantity}
                            className="w-full py-2 pl-5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="photo" className="text-gray-700">
                            Details
                        </label>
                        <input
                            type="text"
                            id="details"
                            name="details"
                            defaultValue={loadToyForEdit.details}
                            className="w-full py-2 pl-5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        <input className='btn btn-block mt-5' type="submit" value="Update Toy" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;