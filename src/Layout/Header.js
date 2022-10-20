import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import { AuthContext } from '../Context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(res => {

            })
            .catch(() => {

            })
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to="/login" className="btn btn-ghost normal-case text-xl">Auth</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/home">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/Register">Register</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/orders">Order</Link>
                {user?.email && <span>Welcome, {user.email}</span>}
                {
                    user?.email ?
                        <button className="ml-3 btn btn-sm" onClick={handleLogOut}>Sign out</button>
                        : <Link className="ml-3 btn btn-sm" to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;