import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const navbar = () => {
    return (
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
    )
}

export default navbar