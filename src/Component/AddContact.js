import React from 'react';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { useDispatch } from 'react-redux';
import { type } from '@testing-library/user-event/dist/type';

const styles = {
    addButton : {
      fontSize : "3rem",
      position : "absolute",
      bottom : 30,
      right: 30,
      backgroundColor : "rgb(1, 49, 98)",
      color : "white",
      borderRadius: "10px"

    },

    style:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        border: 'none',
        outline: "none",
        borderRadius: '20px',
        boxShadow: 10,
        p: 4,
    },

    divstyle : {
        display:"flex",
        // justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
    },

    inputStyle: {
        margin:"0px 0px 0px 15px",
        padding:"10px",
        width:"250px",
        border:"1px solid #ccc",
        borderRadius:"5px"
    },

    btn:{
        border: "none",
        outline: "none",
        backgroundColor: "rgb(44, 98, 224)",
        color : "white",
        padding: "10px",
        borderRadius: "10px"
    }

  };

function AddContact() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const[firstname,setFirstName] = useState("");
    const[lastname,setLastName] = useState("");
    const[number,setNumber] = useState("");
    const[email,setEmail] = useState("");
    const[dob,setDob] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addContact = ()=>{
        const payload = {
            firstname : firstname,
            lastname : lastname,
            number : number,
            email : email,
            dob : dob,
            isFav : 0,
            recentallyCalled : Date.now(),
        }
        dispatch({type: 'Add_Contact', payload: payload});
        handleClose();
    };


    return (
        <div>
            <AddIcon   onClick={handleOpen}/>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles.style}>
                    <CancelPresentationIcon style={{float:"right", color:"grey", fontSize:"2rem"}} onClick={handleClose}/>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Contact Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div style={styles.divstyle}>
                            <label  style={{paddingTop:"7px"}}><PersonOutlineIcon style={{fontSize:"2rem"}}/></label>
                            <input style={styles.inputStyle} placeholder='FirstName' onChange={(e)=>{setFirstName(e.target.value)}}></input>
                        </div>
                        <div style={styles.divstyle}>
                            <label  style={{paddingTop:"7px"}}><PersonOutlineIcon style={{fontSize:"2rem"}}/></label>
                            <input style={styles.inputStyle} placeholder='LastName' onChange={(e)=>{setLastName(e.target.value)}}></input>
                        </div>
                        <div style={styles.divstyle}>
                            <label style={{paddingTop:"7px"}}><PhoneIcon style={{fontSize:"2rem"}}/></label>
                            <input style={styles.inputStyle} placeholder='Number' onChange={(e)=>{setNumber(e.target.value)}}></input>
                        </div>
                        <div style={styles.divstyle}>
                            <label style={{paddingTop:"7px"}}><EmailIcon style={{fontSize:"2rem"}}/></label>
                            <input style={styles.inputStyle} type={"email"} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}></input>
                        </div>
                        <div style={styles.divstyle}>
                            <label  style={{paddingTop:"7px"}}><EventNoteIcon style={{fontSize:"2rem"}}/></label>
                            <input style={styles.inputStyle} type={"date"} placeholder='Date of birth' onChange={(e)=>{setDob(e.target.value)}}></input>
                        </div>
                        <div style={{position:"relative", left:"95px", top:"10px"}}>
                            <button onClick={(e)=>{addContact()}} style={styles.btn}>ADD</button>
                        </div>
                    </Typography>
                </Box>
            </Modal> 
        </div>
    )
}

export default AddContact
