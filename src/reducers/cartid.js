const addProductidToCart = (state = [],data) => {
    switch(data.type){
        case "ADD_PRODUCT_ID": 
            return [...state,data.data];
        case "REMOVE_PRODUCT_ID":
            return state.filter((item) => data.data !== item);
            default:
                return state;
    }
}
export default  addProductidToCart;   