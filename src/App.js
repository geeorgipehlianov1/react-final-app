import { Login } from './components/AuthComponents/Login'
import { Register } from './components/AuthComponents/Register'
import { HomePage } from './components/Home/index'
import { Footer } from './components/Layout/Footer'
import { NavBar } from './components/Layout/NavBar/index'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Login></Login>
      <Register></Register>
      <HomePage></HomePage>
      <Footer></Footer>
    </>
  )
}

export default App
