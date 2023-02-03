import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
    return (
        <>
            <nav>
                <Link to={'featured'}>featured</Link>
                <Link to={'new'}>New</Link>
            </nav>
            <Outlet />
        </>
    )
}
export default Products