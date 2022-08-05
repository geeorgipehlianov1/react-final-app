import { Login } from './components/AuthComponents/Login'
import { Register } from './components/AuthComponents/Register'
import { HomePage } from './components/Home/index'
// import { Footer } from './components/Layout/Footer'
import { NavBar } from './components/Layout/NavBar/index'
import { CreateBook } from './components/Create/index'
import { EditBook } from './components/Edit/index'
import { Catalog } from './components/Catalog/index'
import { Details } from './components/Details/index'
import { Routes, Route } from 'react-router-dom'
import { NotFound } from './components/NotFound/index'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/details" element={<Details />} />
        <Route path="/create" element={<CreateBook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </>
  )
}

export default App
