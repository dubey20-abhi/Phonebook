import { combineReducers } from "redux";
import ContactReducer from "./ContactReducer";

const allReducer = combineReducers({
    contactList : ContactReducer
})

export default allReducer;