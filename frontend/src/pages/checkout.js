// import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AppBar, Button, Toolbar, Typography, position } from "@mui/material";

const CheckoutPage = () => {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' align='left'>
                        some stuff
                    </Typography>
                    <Button variant='contained' align="right">
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Box m={5} pt={5}>
                Order Summary
            </Box>

            <Box m={5} pt={5} bgcolor='#80deea' sx={{
                    width: 'auto',
                    height: 'auto',
                }}
            >
                products appear here
            </Box>

            <Box m={5} pt={5} bgcolor='#fff9c4' sx={{
                width: 300,
                height: 300,
                position: "right",
                alignSelf: "flex-end",
                textAlign: "center",
            }}>
                this is pricing stuff
            </Box>
        </div>
    )
}

export default CheckoutPage