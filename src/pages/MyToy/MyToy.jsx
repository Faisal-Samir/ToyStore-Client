import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'
import UseTitle from '../../hooks/UseTitle';

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [individualToy, setIndividualToy] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        fetch(`http://localhost:5000/toys?sellerEmail=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setIndividualToy(data);
            })
    }, [])
    // console.log(individualToy);

    const [sortToy, setSortToy] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [dscSort, setDscSort] = useState([]);

    const handleSort = () => {
        setIsClicked(true);
        setSortOrder('asc');
        fetch(`http://localhost:5000/toys?sellerEmail=${user.email}&price=1`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSortToy(data);
            })
    }

    const handleDscSort = () => {
        setIsClicked(true);
        setSortOrder('dsc');
        fetch(`http://localhost:5000/toys?sellerEmail=${user.email}&price=-1`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDscSort(data);
            })
    }

    const [toys, setToys] = useState(individualToy);

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remainingToys = individualToy.filter(toy => toy._id !== _id);
                            console.log(remainingToys);
                            setIndividualToy(remainingToys);
                        }

                    })
            }
        })

    }
    UseTitle("My Toy");
    return (
        <div>
            <div className='flex gap-20 w-2/3 mx-auto justify-center items-center mt-16'>
                <h1 className='text-center text-2xl font-bold'>{user.displayName} toy added: {individualToy.length}</h1>
                <button onClick={handleSort} className='btn btn-warning'>sort asc by Price</button>

                <button onClick={handleDscSort} className='btn btn-error'>sort dsc by Price</button>
            </div>
            <table className=" mt-10 mb-20 table w-3/4 mx-auto table-auto">
                <thead>
                    <tr className='text-center'>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        !isClicked ? (individualToy.map(toys => <tr key={toys._id}>
                            <td>{toys.sellerName}</td>
                            <td>{toys.name}</td>
                            <td>{toys.subCategoryName
                            }</td>
                            <td>{toys.price
                            }</td>
                            <td>{toys.quantity
                            }</td>
                            <td>
                                <Link to={`/updateToy/${toys._id}`}>
                                    <button className='btn btn-info'>Update</button>
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => { handleDelete(toys._id) }} className='btn btn-success'>Delete</button>
                            </td>
                        </tr>)) : sortOrder == 'asc' ?
                            (
                                sortToy.map(toys => <tr key={toys._id}>
                                    <td>{toys.sellerName}</td>
                                    <td>{toys.name}</td>
                                    <td>{toys.subCategoryName
                                    }</td>
                                    <td>{toys.price
                                    }</td>
                                    <td>{toys.quantity
                                    }</td>
                                    <td>
                                        <Link to={`/updateToy/${toys._id}`}>
                                            <button className='btn btn-info'>Update</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => { handleDelete(toys._id) }} className='btn btn-success'>Delete</button>
                                    </td>
                                </tr>)
                            ) :

                            (
                                dscSort.map(toys => <tr key={toys._id}>
                                    <td>{toys.sellerName}</td>
                                    <td>{toys.name}</td>
                                    <td>{toys.subCategoryName
                                    }</td>
                                    <td>{toys.price
                                    }</td>
                                    <td>{toys.quantity
                                    }</td>
                                    <td>
                                        <Link to={`/updateToy/${toys._id}`}>
                                            <button className='btn btn-info'>Update</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => { handleDelete(toys._id) }} className='btn btn-success'>Delete</button>
                                    </td>
                                </tr>)
                            )


                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToy;