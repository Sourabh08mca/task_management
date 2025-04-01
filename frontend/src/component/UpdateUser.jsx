import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Pending');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5001/getUser/${id}`)
            .then(result => {
                setTitle(result.data.title);
                setDescription(result.data.description);
                setStatus(result.data.status);
                setDate(result.data.date);
            })
            .catch(err => console.log(err));
    }, [id]);

    const Update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5001/updateUser/${id}`, { title, description, status, date })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="min-h-screen bg-gray-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                
                <h2 className="mt-6 text-center text-4xl leading-9 font-extrabold text-white">Update Task</h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={Update}>
                        <div>
                            <label className="block text-sm font-bold leading-5 text-gray-700">Title</label>
                            <input type="text" placeholder="Enter title" required
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 sm:text-sm"
                                value={title} onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mt-6">
                            <label className="block text-sm font-bold leading-5 text-gray-700">Description</label>
                            <input type="text" placeholder="Enter description" required
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 sm:text-sm"
                                value={description} onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="mt-6">
                            <label className="block text-sm font-bold leading-5 text-gray-700">Status</label>
                            <select className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 sm:text-sm"
                                value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="Complete">Complete</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                        <div className="mt-6">
                            <label className="block text-sm font-bold leading-5 text-gray-700">Date</label>
                            <input type="date" required
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 sm:text-sm"
                                value={date} onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateUser;
