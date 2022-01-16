

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
        
        default:
            return state;
    }
}

export default ContactReducer;
