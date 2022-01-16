import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Rating } from '@mui/material';
import AddFavorite from './AddFavorite';

function stringToColor(string) {
    let hash = 0;
    let i;
  
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

function ContactDetails({firstname, lastname, number, isFav, index}) {

    return (
        <div style={{display:"flex", justifyContent:"space-between", marginTop:"15px", alignItems:"center"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <Avatar {...stringAvatar(`${firstname} ${lastname}`)} />
                <div style={{paddingLeft:"20px"}}>
                    {firstname} {lastname}
                    <div style={{color:"grey"}}>{number}</div>   
                </div>
            </div>
            <div>
            <AddFavorite isFav={isFav} userId={index}/>
            </div>
        </div>
    )
}

export default ContactDetails
