import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
    return (
        <>
            <div>Products</div>

            <div>
                <input type="text" placeholder='Search Products' />
            </div>
            <nav>
                <Link to={'featured'}>featured</Link>

                <Link to={'new'}>New</Link>
            </nav>
            <Outlet/>
        </>
    )
}
export default Products