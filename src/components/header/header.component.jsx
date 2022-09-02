import {Fragment} from 'react'
import { Link, Outlet } from 'react-router-dom';

import './header.styles.scss'
const Header = () => {
  return (
    <Fragment>
        <div className='header'>
            <Link className='header-home' to='/'>Home</Link>
            
        </div>
        <Outlet/>
    </Fragment>
  )
}

export default Header