import React from 'react'
import Navbar from 'components/Navbar';
// import About from 'pages/About';
import Home from 'pages/Home';
import './index.css'
import { Routes, Route } from 'react-router-dom'
import { OrderSummary } from 'pages/OrderSummary';
import { PageNotFound } from 'pages/PageNotFound';
import Products from 'pages/Products';
import FeaturedProducts from 'pages/FeaturedProducts';
import NewProducts from 'pages/NewProducts';
import { Users } from 'pages/Users';
import { UserDetails } from 'pages/UserDetails';
import { Admin } from 'pages/Admin';
const LazyAbout = React.lazy(() => import('pages/About'))
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<LazyAbout />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />} >
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />} >
          {/* dynamic route */}
          <Route path=':id' element={<UserDetails />} />
          {/* dynamic route that has a specific route */}
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
