import React from 'react'
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteContact({userId}) {
    const dispatch = useDispatch();
    const deleteContact = ()=>{
        dispatch({type: 'Delete_Contact', payload: userId});
    };
    return (
        <div>
            <IconButton aria-label="delete" onClick={()=>{deleteContact()}}>
        <DeleteIcon />
      </IconButton>
        </div>
    )
}

export default DeleteContact
