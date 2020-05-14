
 

export const addProductid = (data) =>{
    return {
        type : "ADD_PRODUCT_ID",
        data : data
    }
}
export const removeProductid = (data) =>{
    return {
        type : "REMOVE_PRODUCT_ID",
        data : data
    }
}

export const addProduct = (data) =>{
    return {
        type : "ADD_PRODUCT",
        data : data
    }
}

export const removeProduct = (data) =>{
    return {
        type : "REMOVE_PRODUCT",
        payload : data
    }
}