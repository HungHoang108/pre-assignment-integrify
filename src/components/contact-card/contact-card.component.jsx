import { useEffect, useContext} from 'react'
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
    }, [setUserData])
 
  return (
    <div className='contact-card-box'>
        <div className='contact-card-subbox'>
        {userData.map(user => {
            return (
                <div className='contact-cards' key={user.id}>

                   <div className='contact-card'>
                        <div className='contact-card-top'>
                            <div className='contact-card-img'>
                                <h3>{user.name.slice(0, 1)}</h3>
                            </div>          
                        </div>

                        <div className='contact-card-middle'>
                            <h2>{user.name}</h2>    
                            <p>@{user.username}</p>
                            
                        </div>
                        <div className='contact-card-bottom'>
                            <a className='contact-card-bottom-email' href="./">{user.email}</a>
                         
                        </div>
                        <Button userNumber={user.id}/>
                        
                    </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default ContactCard