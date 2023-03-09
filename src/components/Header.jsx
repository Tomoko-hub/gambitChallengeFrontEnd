import React from 'react'
import { Link } from 'react-router-dom'
 
const Header = () => {
  return (
    <header>
        <div>
            <Link to="/" />      
        </div>
        <nav className='page-title'>
            <ul>
                <li>
                    <Link to="/user/register" />
                    Register
                </li>
                <li>
                    <Link to="/user/login" />
                    Login
                </li>
                <li>
                    <Link to="/result/create" />
                    Put Result
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
