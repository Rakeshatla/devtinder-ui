// import React from 'react'

import { useSelector } from "react-redux"


const Navbar = () => {
    const user = useSelector(store => store.user)
    return (
        <div>
            <div className="navbar bg-neutral">
                <div className="flex-1">
                    <a className="btn btn-warning text-xl">daisyUI</a>
                </div>
                <div className="flex-none gap-2">

                    {user && <div className="text-info p-3 align-middle"><p>Welcome,{user.firstName}</p></div>}
                    {user && <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-20 rounded-full mr-0 m-0">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 mx-4 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Navbar
