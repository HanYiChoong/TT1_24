/*jshint esversion: 6 */
import React, { useEffect, useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { Link } from "react-router-dom";
import axios from 'axios';

function CartPage() {
  const [data, setData] = useState([]);
  let totalPrice = data.reduce((partial_sum, a) => partial_sum + (a.price * a.qty), 0);

  useEffect(() => {
    axios.get("http://localhost:8000/api/cart/")
      .then(response => {
        console.log({response})
        if (!response.data.error) {
            setData(response.data)
        }
      });
  }, []);

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
                <Link to="/">
                  <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    align="left"
                    noWrap
                    sx={{ flexGrow: 1 }}
                  >
                    Name of our app
                  </Typography>
                </Link>
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
                  <Grid item container spacing={4}>
                    {/*Product cards*/}
                    {data.map((product) => (
                      <Grid item key={product.id} xs={12} sm={6} md={3}>
                        <Card
                          sx={{ height: '100%', width: "100%", display: 'flex', flexDirection: 'column' }}
                        >
                          <CardMedia
                            component="img"
                            sx={{
                              pt: '5%',
                            }}
                            image={product.image}
                            height="300"
                            alt="random"
                          />
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h6" component="h2">
                              {product.title}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h2">
                              ${product.price}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h2">
                              Qty: {product.qty}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small" sx={{ flexGrow: 1 }}><DeleteIcon /></Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
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
                        Total: ${totalPrice}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Button onClick={() => (
                        setData([])
                      )}>
                        Empty Cart <DeleteForeverIcon/>
                      </Button>
                    </Grid>
                    <Grid item xs={3}>
                      <Link to="/checkout">
                        <Button>
                          Checkout <PriceCheckIcon/>
                        </Button>
                      </Link>
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

  return (
    <div className="Cart">
      <CartContent />
    </div>
  );
}

export default CartPage;
