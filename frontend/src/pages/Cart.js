/*jshint esversion: 6 */
import React, {useEffect, useState} from 'react';
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
import { Button, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

function CartPage() {
  const [data, setData] = useState([]);
  const [totalPrice, setPrice] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
          `https://`
      );
      const data = await response.json();
      setData(data.hits);
    };
    fetchData();
    
  
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
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
              <Link to="/product">
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
              </Link>
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
                            <Typography>
                              {product.description}
                            </Typography>
                          </CardContent>
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

  return (
    <div className="Cart">
      <CartContent />
    </div>
  );
}

export default CartPage;
