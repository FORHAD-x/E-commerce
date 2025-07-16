import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductDetails from './pages/ProductDetails'
import ErrorPage from './pages/ErrorPage'
import Layout from './components/Layout/Layout'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

function App() {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Blog' element={<Blog/>} />
      <Route path='/shop/Details' element={<ProductDetails/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Checkout' element={<Checkout/>} />
      <Route path='*' element={<ErrorPage/>} />

    </Route>
  ))

  return (
    <>
      <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
