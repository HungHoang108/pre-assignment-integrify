import {React} from 'react'

import { Link } from 'react-router-dom';

import './buttom.styles.scss'

const Button = ({userNumber}) => {


  return (
    <div>
        <button className='button' >
            <Link className='button-link' to={`${userNumber}`}>MORE DETAILS</Link>
        </button>
    </div>
  )
}

export default Button