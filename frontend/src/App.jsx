import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './component/Users'
import CreateUser from './component/CreateUser'
import UpdateUser from './component/UpdateUser'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/update/:id' element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
