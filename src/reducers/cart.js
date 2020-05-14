const addProductToCart = (state = [],data) => {
    switch(data.type){
        case "ADD_PRODUCT": 
            return [...state,data.data];
        case "REMOVE_PRODUCT": 
            return state.filter((item) => data.payload.id !== item.id);
            default:
                return state;
    }
}
export default  addProductToCart;   