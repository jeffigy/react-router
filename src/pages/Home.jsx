import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate()
  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate('order-summary')}>place order</button><br/>
      <button onClick={() => navigate('order-summary', { replace: true })}> back button that replaces history</button>
    </>
  )
}

export default Home