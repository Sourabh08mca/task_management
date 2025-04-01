import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

function Users() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
       
    }, [])

    const handleDelete =  (id) =>{
        axios.delete('http://localhost:5001/deleteUser/'+id)
        .then(res => {console.log(res)
            window.location.reload()
        })
        .catch(errr => console.log(errr))
    }

  return (
    <div>
      <div class="bg-gray-500 p-8 overflow-auto mt-16 h-screen">
  <h2 class="text-5xl font-bold mb-6 flex justify-center align-center text-white">Task Management System</h2>

  
  <div class="relative overflow-auto">
    <div class="overflow-x-auto rounded-lg">
   <div className='mb-6'> <Link to="/create" class="bg-green-400 text-black px-6 py-3 rounded-md text-2xl font-bold " >Add Task</Link></div>
      <table class="min-w-full bg-white border mb-20">
        <thead>
          <tr class="bg-[#2B4DC994] text-center text-xs md:text-sm font-thin text-white">
            <th class="p-0">
              <span class="block py-2 px-3 border-r border-gray-300">ID</span>
            </th>
            <th class="p-0">
              <span class="block py-2 px-3 border-r border-gray-300">Title</span>
            </th>
            <th class="p-0">
              <span class="block py-2 px-3 border-r border-gray-300">Description</span>
            </th>
            <th class="p-0">
              <span class="block py-2 px-3 border-r border-gray-300">status</span>
            </th>
            <th class="p-0">
              <span class="block py-2 px-3 border-r border-gray-300">Date</span>
            </th>
            <th class="p-4 text-xs md:text-sm">Actions</th>
          </tr>
        </thead>
        <tbody>
            {
                users.map((user,index)=>{
                   return <tr class="border-b text-xs md:text-sm text-center text-gray-900 ">
            <td class="p-2 md:p-4">{index+1}</td>
            <td class="p-2 md:p-4">{user.title}</td>
            <td class="p-2 md:p-4">{user.description}</td>
            <td class="p-2 md:p-4">{user.status}</td>
            <td class="p-2 md:p-4">{user.date}</td>
            <td class="relative p-2 md:p-4 flex justify-center space-x-2">
            <Link to={`/update/${user._id}`} class="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm">Update</Link>
              <button class="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm"
               onClick={(e) => handleDelete(user._id)}>Delete</button>
            </td>
          </tr>
                })
            }
          
        </tbody>
      </table>
    </div>
  </div>
</div>
    </div>
  )
}

export default Users
