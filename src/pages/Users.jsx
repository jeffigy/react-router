import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') == 'active'
    const users = [
        { name: 'user1', id: 1 },
        { name: 'user2', id: 2 },
        { name: 'user3', id: 3 },
    ]
    return (
        <div>
            <ul>
                {users.map((user) =>
                    <Link key={user.id} to={`${user.id}`}>
                        <li >
                            {user.name}
                        </li>
                    </Link>
                )}
            </ul>
            <Outlet />
            <div>
                <button onClick={() => setSearchParams({ filter: 'active' })}>active users</button>
                <button onClick={() => setSearchParams({})}>reset filter</button>
            </div>
            {showActiveUsers ? (<h2>showing active users</h2>) : (
                <h2>showing all users</h2>
            )}
        </div>
    )
}
