import { Login } from './components/AuthComponents/Login'
import { Register } from './components/AuthComponents/Register'
import { HomePage } from './components/Home/index'
import { Footer } from './components/Layout/Footer'
import { NavBar } from './components/Layout/NavBar/index'
import { CreateBook } from './components/Create/index'
import { EditBook } from './components/Edit/index'
import { Catalog } from './components/Catalog/index'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Catalog></Catalog>
      {/* <EditBook></EditBook> */}
      {/* <HomePage></HomePage> */}
      {/* <CreateBook></CreateBook> */}
      {/* <Login></Login>
      <Register></Register> */}
      {/* <Footer></Footer> */}
    </>
  )
}

export default App
