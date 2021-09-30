// import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const navbar = () => {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' align='left'>
                        some stuff
                    </Typography>
                    <Button variant='contained'>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Box m={5} pt={5}>
                Order Summary
            </Box>
            <Box m={2} pt={3} bgcolor='#80deea' sx={{
                    width: 'auto',
                    height: 'auto',
                }}
            >
                
            </Box>
        </div>
    )
}

const order_summary = () => {
    return (
        <Box bgcolor='#80deea'>

        </Box>
    )
}

function Checkout() {
    return (
        <navbar/>
    );
}

export default navbar