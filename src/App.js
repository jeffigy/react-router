import Navbar from 'components/Navbar';
import About from 'pages/About';
import Home from 'pages/Home';
import './index.css'
import { Routes, Route } from 'react-router-dom'
import { OrderSummary } from 'pages/OrderSummary';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/order-summary' element={<OrderSummary />} />
      </Routes>
    </>
  );
}

export default App;
