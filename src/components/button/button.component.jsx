import {React} from 'react'

import { Link } from 'react-router-dom';

const Button = ({userNumber}) => {


  return (
    <div>
        <button >
            <Link to={`${userNumber}`}>MORE DETAILS</Link>
        </button>
    </div>
  )
}

export default Button