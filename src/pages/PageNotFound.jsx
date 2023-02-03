import React from 'react'
import { useNavigate } from 'react-router-dom'
export const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>Page Not Found</div>
            <button onClick={() => navigate(-1)}> go back</button>
        </>
    )
}
