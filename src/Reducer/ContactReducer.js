

const ContactReducer = (state=[

], action)=> {
    switch(action.type){
        case 'Add_Contact':
            return [...state, action.payload];

        case 'Toggle_Fav':
            const temp = [...state]
            temp.map((contact,index)=>{
                if(index == action.payload){
                    contact.isFav = (contact.isFav+1)%2;
                }
                return contact;
            })
            return [...temp];

        case 'Delete_Contact':
            const tempContact = [...state]
            console.log(action.payload);
            tempContact.filter((contact,index)=>{
                return index != action.payload;
            })
            return [...tempContact];
        
        default:
            return state;
    }
}

export default ContactReducer;
