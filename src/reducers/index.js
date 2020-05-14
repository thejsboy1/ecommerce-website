import { combineReducers} from "redux";

import addProductToCart from "./cart"; 
import addProductidToCart from "./cartid"; 

const allReducers = combineReducers({
    addProductToCart :addProductToCart,  
    addProductidToCart :addProductidToCart,  
});

export default allReducers;