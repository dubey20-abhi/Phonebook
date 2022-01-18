import React from 'react'
import Avatar from '@mui/material/Avatar';
import AddFavorite from './AddFavorite';
import DeleteContact from './DeleteContact';

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
        <div style={{display:"flex", justifyContent:"space-between", marginTop:"10px", alignItems:"center"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <Avatar {...stringAvatar(`${firstname} ${lastname}`)} />
                <div style={{paddingLeft:"20px"}}>
                    {firstname} {lastname}
                    <div style={{color:"grey"}}>{number}</div>   
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
            <DeleteContact userId={index}/>
            <AddFavorite isFav={isFav} userId={index}/>
            </div>
        </div>
    )
}

export default ContactDetails
