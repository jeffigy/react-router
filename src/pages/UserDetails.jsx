import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
    const params = useParams()
    const userId = params.id;
    // or this one liner code 
    // const {userId} = useParams() 
    return (
        <div>User Id is {userId}</div>
    )
}
