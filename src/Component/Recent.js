import React from 'react'
import { useSelector } from 'react-redux';
import ContactDetails from './ContactDetails';

function Recent() {
    const contactList = useSelector(state=>state.contactList);
    contactList.sort((a,b)=>{
        if(a.recentallyCalled > b.recentallyCalled){
            return -1;
        }
        if(a.recentallyCalled < b.recentallyCalled){
            return 1;
        }
        return 0;
    })
    return (
        <div>
            {
                contactList.map((contact,index)=>{
                   return index <11 && <ContactDetails {...{...contact,index : index}}/>
                    
                })
            }
           
        </div>
    )
}

export default Recent
