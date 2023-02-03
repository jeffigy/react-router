import Navbar from 'components/Navbar';
import About from 'pages/About';
import Home from 'pages/Home';
import './index.css'
import { Routes, Route } from 'react-router-dom'
import { OrderSummary } from 'pages/OrderSummary';
import { PageNotFound } from 'pages/PageNotFound';
import Products from 'pages/Products';
import FeaturedProducts from 'pages/FeaturedProducts';
import NewProducts from 'pages/NewProducts';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />} >
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
