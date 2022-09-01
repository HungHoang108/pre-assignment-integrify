import {Fragment} from 'react'
import { Link, Outlet } from 'react-router-dom';

import './header.styles.scss'
const Header = () => {
  return (
    <Fragment>
        <div>
            <Link to='/'>Back to Homepage</Link>
            
        </div>
        <Outlet/>
    </Fragment>
  )
}

export default Header