import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Pizza from './pages/Pizza'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import NotFound from './pages/NotFound'
import CartProvider from './context/CartContext'
import PizzaProvider from './context/PizzaContext'

function App() {
  return (
    <>
      <CartProvider>
        <div className='grid'>
          <NavBar/>
          <PizzaProvider>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/register' element={<RegisterPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/pizza/:id' element={<Pizza/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </PizzaProvider>          
          <Footer/> 
        </div>        
      </CartProvider>      
    </>
  )
}

export default App
