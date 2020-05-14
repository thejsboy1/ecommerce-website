import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'; 
import { useDispatch, useSelector } from "react-redux";
import {addProduct} from "../actions"; 

const dummyData = [
    {id:1,name: 'Product1', price:1100, size: '11', description: 'some description' }, 
    {id:2,name: 'Product2', price:1200, size: '12', description: 'some description' }, 
    {id:3,name: 'Product3', price:1300, size: '13', description: 'some description' }, 
    {id:4,name: 'Product4', price:1400, size: '14', description: 'some description' }, 
    {id:5,name: 'Product5', price:1500, size: '25', description: 'some description' }, 
    {id:6,name: 'Product6', price:1600, size: '16', description: 'some description' }
] ;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },  
    paper1: {
      position: 'absolute',
      width: 400,
      backgroundColor: 'white',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    }, formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  

function Productdata() { 
    const dispatch = useDispatch();
    const classes = useStyles(); 
    const [product,setProduct] = React.useState(dummyData)
    const [open, setOpen] = React.useState(false); 
    const [Modeldata, setModeldata] = React.useState('');  

    const handleOpen = (valuedata) => {
        setModeldata(valuedata);
        setOpen(true); 
    };
  
    const addValueToCart = (valuedata) => { 
        dispatch(addProduct(valuedata));  
    }



let Productdata = product.map((value,index)=>{   
    return (  
        <Grid item xs={4} key={index}>
            <Paper className={classes.paper}>
                <p>Name : {value.name}</p>
                <p>Size : {value.size}</p>
                <p>Price : {value.price}</p>
                <p>Description : {value.description}</p> 
                <div style={{backgroundColor: "whitesmoke"}}>
                    <span>  
                       <button type="button" onClick={handleOpen.bind(this,value)} >
                            Quick View 
                        </button> 
                    </span> | 
                    <span>  
                
                         <button type="button" onClick={addValueToCart.bind(this,value)} >Add To Cart </button> 
                        
                    </span>
                </div>
               
            </Paper>
        </Grid>
    )
})


return Productdata;


}

export default Productdata;