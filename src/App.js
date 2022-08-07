import { useState } from 'react'

import { Login } from './components/AuthComponents/Login'
import { Register } from './components/AuthComponents/Register'
import { HomePage } from './components/Home/index'
// import { Footer } from './components/Layout/Footer'
import { NavBar } from './components/Layout/NavBar/index'
import { CreateBook } from './components/Create/index'
import { EditBook } from './components/Edit/index'
import { Catalog } from './components/Catalog/index'
import { Details } from './components/Details/index'
import { About } from './components/About'
import { MyProfile } from './components/MyProfile/index'
import { NotFound } from './components/NotFound/index'
import { AuthContext } from './contexts/AuthContext'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoutes } from './components/Common/PrivateRoutes/index'

function App() {
  const [auth, setAuth] = useState({})

  const userLogin = (authData) => {
    setAuth(authData)
  }

  return (
    <>
      <AuthContext.Provider value={{ user: auth, userLogin }}>
        <NavBar></NavBar>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/create" element={<CreateBook />} />
            <Route path="/edit/:id" element={<EditBook />} />
            <Route path="/my-profile" element={<MyProfile />}></Route>
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        {/* <Footer></Footer> */}
      </AuthContext.Provider>
    </>
  )
}

export default App
