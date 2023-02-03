import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Users = () => {
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
        </div>
    )
}
