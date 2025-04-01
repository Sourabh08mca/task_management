import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Pending');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5001/createUser", { title, description, status, date })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="min-h-screen bg-gray-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                
                <h2 className="mt-6 text-center text-4xl leading-9 font-extrabold text-white">Add New Task</h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={Submit}>
                        <div>
                            <label className="block text-sm font-bold leading-5 text-gray-700">Title</label>
                            <input type="text" placeholder="Enter Title" required
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mt-6">
                            <label className="block text-sm font-bold leading-5 text-gray-700">Description</label>
                            <input type="text" placeholder="Enter Description" required
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="mt-6">
                            <label className="block text-sm font-bold leading-5 text-gray-700">Status</label>
                            <select className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm"
                                onChange={(e) => setStatus(e.target.value)}
                                value={status}>
                                <option value="Complete">Complete</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                        <div className="mt-6">
                            <label className="block text-sm font-bold leading-5 text-gray-700">Date</label>
                            <input type="date" required
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm"
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Add Task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateUser;
