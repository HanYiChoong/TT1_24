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

function CartPage() {
  const [data, setData] = useState([]);
  let totalPrice = data.reduce((partial_sum, a) => partial_sum + (a.price * a.qty), 0);

  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await fetch(
    //       `https://`
    //   );
    //   const data = await response.json();
    //   setData(data.hits);
    // };
    // fetchData();
    setData([{
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category_id": 3,
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "qty": 50
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category_id": 3,
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "qty": 50
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category_id": 3,
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "qty": 50
    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category_id": 3,
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "qty": 50
  },])
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
              <Button>
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
              </Button>
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
                              ${product.price.toFixed(2)}
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
                      <Button>
                        Empty Cart
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
