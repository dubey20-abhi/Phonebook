import { Rating } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';

function AddFavorite({isFav, userId}) {
    const dispatch = useDispatch();
    const addFavToggle = ()=>{
        dispatch({type: 'Toggle_Fav', payload: userId});
    };
    return (
        <div>
            <Rating name="customized-10" defaultValue={isFav} max={1} onChange={()=>{addFavToggle()}} />
        </div>
    )
}

export default AddFavorite
