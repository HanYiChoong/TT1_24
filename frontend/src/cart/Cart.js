/*jshint esversion: 6 */
import '../App.css';
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `100%`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const mdTheme = createTheme();

function CartContent() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar open={true}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              align="left"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <LogoutIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                ><Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                
                  <Typography component="h1"
                  variant="h6"
                  color="inherit"
                  align="left"
                  noWrap
                  sx={{ flexGrow: 1 }}>
                  Cart
                </Typography>
              </Grid>
              <Grid item>
                {/*Product cards*/}
              </Grid>
              <Grid item container spacing="inherit" direction="row">
                {/*Total, empty cart, checkout*/}
                <Grid item xs={6}>
                <Typography component="h2"
                  variant="h6"
                  color="inherit"
                  align="left"
                  noWrap
                  sx={{ flexGrow: 1 }}>
                  Total: $
                </Typography>
                  </Grid>
                    <Grid item xs={3}>
                      <Button>
                        Empty Cart
                      </Button>
                    </Grid>
                    <Grid item xs={3}>
                      <Button>
                        Checkout
                      </Button>
                  </Grid>
              </Grid>
            </Grid>
            </Paper>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

function Cart() {
  return (
    <div className="Cart">
      <CartContent />
    </div>
  );
}

export default Cart;
