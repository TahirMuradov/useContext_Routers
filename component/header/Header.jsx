import React, { useContext } from 'react'
import '../../index.css'
import '../../style.css'
import { Link } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher'
import ThemeContext from '../../context/ThemeContext'
const Header = () => {
  const{theme}=useContext(ThemeContext);
  return (
<>

<header className={`w-full h-auto ${theme === 'dark' ? 'dark-theme' : ''}`}>
<div className="container w-4/5 m-auto flex justify-between items-center">
    <div className="logo p-5 ">
        LOGO
    </div>
    <div className="nav-bar">
        <ul className='flex p-5'>
            <li>
              <Link to={'/'}>
              Home
              </Link>
              </li>
            <li className='px-5'>
              <Link to={'/item'}>
              Item
              </Link>
              </li>
            <li>
              <Link to={'/contac'}>
              Concat
              </Link>
              </li>
             <ThemeSwitcher/>
        </ul>
    </div>
</div>
</header>
</>
  )
}

export default Header