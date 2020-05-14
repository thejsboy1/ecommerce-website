import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from "react-redux"; 
import { removeProduct, removeProductid } from "../actions"; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function CartItem() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const productcart = useSelector(state => state.addProductToCart);   



  const deleteCartValue = (valuedata) => {   
    dispatch(removeProductid(valuedata.id));
    dispatch(removeProduct(valuedata)); 
    // valuedata.id=""

} 

    let Productdata = productcart.map((value,index)=>{
        return (  
            <Paper className={classes.paper} style={{ marginBottom: "3%"}}  key={index}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Name: {value.name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                Size : {value.size}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                Prie : {value.price}
                                </Typography>
                            </Grid> 
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1"> <button 
                              type="button" 
                              onClick={deleteCartValue.bind(this,value)}  
                            > Remove</button></Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        )
    })


  return (
    <div className={classes.root}>
      {Productdata}
    </div>
  );
}
export default CartItem;