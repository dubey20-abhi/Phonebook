import React from 'react'
import { useSelector } from 'react-redux'
import ContactDetails from './ContactDetails'

function Contacts({filteredList}) {
    const contactList = useSelector(state=>state.contactList);

    return (
        <div>
            {  filteredList.length !== 0 ? filteredList.map((contact,index)=>(
                    <ContactDetails {...{...contact,index : index}}/>
                    
                ))  :
                contactList.map((contact,index)=>(
                    <ContactDetails {...{...contact,index : index}}/>
                    
                ))
            }
           
        </div>
    )
}

export default Contacts;
