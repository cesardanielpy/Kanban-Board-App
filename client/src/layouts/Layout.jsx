import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <div className="container mt-5">
                <h2>Project Manager</h2>
                <Outlet />
            </div>
        </>
    )
}

export default Layout