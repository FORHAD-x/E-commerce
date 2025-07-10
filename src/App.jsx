import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import NotFound from './components/NotFound/NotFound'
import Layout from './components/Layout'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Details from './pages/ProductDetails'
import ProductDetails from './pages/ProductDetails'

function App() {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Checkout' element={<Checkout/>} />
      <Route path='/shop/Details' element={<ProductDetails/>} />
      <Route path='*' element={<NotFound/>} />

    </Route>
  ))

  return (
    <>
      <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
