import React from 'react'
import { useSelector } from 'react-redux'
import ContactDetails from './ContactDetails'

function Contacts() {
    const contactList = useSelector(state=>state.contactList);
    return (
        <div>
            {
                contactList.map((contact,index)=>(
                    <ContactDetails {...{...contact,index : index}}/>
                    
                ))
            }
           
        </div>
    )
}

export default Contacts;
