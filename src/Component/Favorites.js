import React from 'react'
import { useSelector } from 'react-redux'
import ContactDetails from './ContactDetails'

function Favorites() {
    const contactList = useSelector(state=>state.contactList);
    return (
        <div>
            {
                contactList.map((contact,index)=>{
                   return contact.isFav == 1 && <ContactDetails {...{...contact,index : index}}/>
                    
                })
            }
           
        </div>
    )
}

export default Favorites
