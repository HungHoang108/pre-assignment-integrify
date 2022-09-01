import {useContext} from 'react'
import { useParams } from 'react-router-dom';

import { UserContext } from '../../context/user-detail.context';

const UserDetails = () => {
    const {id} = useParams();

    const {userData} = useContext(UserContext)
    


  return (
    <div>
        {
            userData.map(user => user.id == id && 
            <dev>
                <dev><h4>Name: {user.name}</h4></dev>
                <dev><h4>UserName: {user.username}</h4></dev>
                <dev><h4>email: {user.email}</h4></dev>
                <dev><h4>-Phone: {user.phone}</h4></dev>
                <dev><h4>-Company: {user.company.name}</h4></dev>
                <dev><h4>-Website: {user.website}</h4></dev>
                <dev>
                    <h4>Address</h4>
                    <p>{user.address.street}</p>
                    <p>{user.address.suite}</p>
                    <p>{user.address.city}</p>
                    <p>{user.address.zipcode}</p>
                </dev>

            </dev>
                
            )
        }
    </div>
  )
}

export default UserDetails