import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'; 
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { addProduct, addProductid } from "../actions"; 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from './button'
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

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const dummyData = [
    {id:1,name: 'Product1', price:1100, size: '11', description: 'some description' }, 
    {id:2,name: 'Product2', price:1200, size: '12', description: 'some description' }, 
    {id:3,name: 'Product3', price:1300, size: '13', description: 'some description' }, 
    {id:4,name: 'Product4', price:1400, size: '14', description: 'some description' }, 
    {id:5,name: 'Product5', price:1500, size: '25', description: 'some description' }, 
    {id:6,name: 'Product6', price:1600, size: '16', description: 'some descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome description' }
] ;


function ProductList() { 
// define all states from hooks
    const dispatch = useDispatch();
    const classes = useStyles();   
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false); 
    const [Modeldata, setModeldata] = React.useState('');  
    const [age, setsort] = React.useState('Lowest');
    const [selectOpen, setselectOpen] = React.useState(false); 
    const [product,setProduct] = React.useState(dummyData)
    const productidcart = useSelector(state => state.addProductidToCart);   
    // const productcart = useSelector(state => state.addProductToCart);   
    const handleOpen = (valuedata) => {
        setModeldata(valuedata);
        setOpen(true); 
    };
    const addValueToCart = (valuedata) => {   
        dispatch(addProductid(valuedata.id));
        dispatch(addProduct(valuedata));
  
    } 

    const handleClose = () => {
      setOpen(false);
    };

   


    

    const handleChange = (event) => {
        setsort(event.target.value);
        if(event.target.value==='Highest'){
            var reversedummyData = dummyData.slice(0).sort(function(a,b) {
                return b.price - a.price;
            });  
            setProduct(reversedummyData)
        }else{
            setProduct(dummyData)
        }
      };
    
      const handleselectClose = () => {
        setselectOpen(false);
      };
    
      const handleselectOpen = () => {
        setselectOpen(true);
      };
     
    let Productdata = product.map((value,index)=>{   
        return (  
            <Grid item xs={4} key={index}>
                <Paper className={classes.paper}>
                    <p>Name : {value.name}</p>
                    <p>Size : {value.size}</p>
                    <p>Price : {value.price}</p>
                    <p>Description : {value.description.length>39?value.description.slice(0,40) + '...':value.description}</p> 
                    <div style={{backgroundColor: "whitesmoke"}}>
                        <span>  
                           <Button 
                                type="button" 
                                event={handleOpen.bind(this,value)} 
                                name ="Quick View " 
                            /> 
                        </span> | 
                        <span> 
                          {productidcart.includes(value.id)?
                            <button 
                              type="button"  
                            >Added</button>
                          :
                            <button 
                              type="button" 
                              onClick={addValueToCart.bind(this,value)}  
                            > Add To Cart</button>
                          }
                        </span>
                    </div>
                   
                </Paper>
            </Grid>
        )
    })

    const body = (
        <div style={modalStyle} className={classes.paper1}>
            <p>Name : {Modeldata.name}</p>
            <p>Size : {Modeldata.size}</p>
            <p>Price : {Modeldata.price}</p>
            <p>Description : {Modeldata.description}</p> 
            {productidcart.includes(Modeldata.id)?
              <button 
                type="button"  
              >Added</button>
            :
              <button type="button" onClick={addValueToCart.bind(this,Modeldata)} >
              Add To Cart
              </button>
            } 
        </div>
      );
 
  return (
    <div className={classes.root}>  
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">SORT</InputLabel>
            <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={selectOpen}
                onClose={handleselectClose}
                onOpen={handleselectOpen}
                value={age}
                onChange={handleChange}
            >
                <MenuItem value={'Lowest'}>Lowest First</MenuItem>
                <MenuItem value={'Highest'}>Highest first</MenuItem> 
            </Select>
      </FormControl>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
            <React.Fragment>
                {Productdata }
            </React.Fragment>
        </Grid>
      </Grid> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default ProductList;