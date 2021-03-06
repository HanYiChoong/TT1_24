// import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AppBar, Button, Toolbar, Typography, Grid } from "@mui/material";
import axios from "axios";

const CheckoutPage = () => {

    const prod = []
    const total = 0

    const products = () => {
        axios.get("http://localhost:8000/api/cart").then(response => {return prod = response})
    } 

    
    for (var i=0; i<prod.length; i++) {
        total += prod[i]['price']
    }

    return (
        <div>
            <AppBar position='static' sx={{width: 'auto', height: 50}}>
                <Typography variant='h5' sx={{textAlign: "center"}}>
                    some stuff
                </Typography>
            </AppBar>
            <Box m={5} pt={5} sx={{textAlign: "center"}}>
                Order Summary
            </Box>

            <Box borderRadius={3} m={5} pt={5} bgcolor='#80deea' sx={{
                    width: 'auto',
                    height: 'auto',
                    textAlign: 'center'
                }}
            >
                {
                    prod.map(ing => <products text = {ing['title']}/>)
                }
                products appear here
            </Box>

            <Box borderRadius={10} m={5} pt={5} bgcolor='#fff9c4' sx={{
                width: 300,
                height: 300,
                alignContent: "right",
                textAlign: "center",
            }}>
                total price: {total}
            </Box>

            <Grid container direction="row">
                <Button alignItems="right">
                    place order
                </Button>
            </Grid>
        </div>
    )
}

export default CheckoutPage