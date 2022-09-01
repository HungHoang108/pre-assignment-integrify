import {useState, useEffect, useContext} from 'react'
import axios from 'axios'

import { UserContext } from '../../context/user-detail.context'
import Button from '../button/button.component'

import './contact-card.styles.scss'

const ContactCard = () => {
    const {setUserData, userData} = useContext(UserContext)

    useEffect(()=> {

        const getData = async () => {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
           
            setUserData(data);
          };
          getData();
    }, [])
 
  return (
    <div>
        {userData.map(user => {
            return (
                <div className='contact-card-box' key={user.id}>
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h2>{user.username.slice(0, 1)}</h2>
                        </div>                       
                    </div>

                    <div>
                        <h2>{user.name}</h2>
                        <p>@{user.username}</p>
                        <a href="./">{user.email}</a>
                        <Button userNumber={user.id}/>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ContactCard