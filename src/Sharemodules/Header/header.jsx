import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';

import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { handelLogout } from '../../Redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';


// SHOW PROFILE IMAGE //
import { profileImagePath } from '../../Api/axiosinstance';
import { profiledatafetch } from '../../Redux/profileSlice';

import { Alert, CardMedia, createTheme, ThemeProvider } from '@mui/material';

// FONT STYLE //
const theme = createTheme({
  typography: { fontFamily: 'Poppins, Arial, sans-serif' }
})


function Header() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogin } = useSelector((state) => state.authKey);

  // SHOW PROFILE IMAGE //
  const { profileDetails } = useSelector((state) => state.profileKey);

  useEffect(() => {
    if (isLogin) {
      dispatch(profiledatafetch());

    }
  }, [isLogin, dispatch])

  // LOGIN LOGOUT FUNCTION //
  const [isoptions, setIsOptions] = useState(false);

  // FIRST NAME & LAST NAME SHOW STATE //
  const [getFirstName, setGetFirstName] = useState('');
  const [getLastName, setGetLastName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const firstName = localStorage.getItem('first_name');
    const lastName = localStorage.getItem('last_name');
    setIsOptions(!!token);
    if (token) {
      setGetFirstName(firstName || '');
      setGetLastName(lastName || "");
    } else {
      setGetFirstName("");
      setGetLastName("");

    }
    // DISPATCH isLogin
  }, [isLogin])

  // CAPITALIZE THE FIRST LEATTER //
  const fName = getFirstName;
  const firstName = fName.charAt(0).toUpperCase() + fName.slice(1);
  const lName = getLastName;
  const lastName = lName.charAt(0).toUpperCase() + lName.slice(1);

  // HANDLE LOGOUT & REMOVE TOKEN //
  const handelLogoutuser = () => {
    dispatch(handelLogout());
    // localStorage.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('first_name');
    localStorage.removeItem('last_name');


    setIsOptions(false);
    navigate('/login')
    window.location.reload();

  }

  // APPBAR //
  const pages = isLogin ? [
    { name: "Home", path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Service', path: '/service' },
    { name: 'Create', path: '/create' },
    { name: "List", path: '/list' },
  ] : [
    { name: "Home", path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Register', path: "/register" },
    { name: 'Create', path: '/create' },
    { name: "List", path: '/list' },
    { name: 'Service', path: '/service' },


  ];

  // POPUP BAR PAGES // 
  const settings = isoptions ? [{ name: 'Profile', path: '/profile' },
  { name: 'Logout', action: handelLogoutuser }] : [{ name: 'Profile', path: '/profile' },
  { name: 'Login', path: '/login' }];


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // SNACKBAR MESSAGE ALERT
  const [state, setState] = useState({
    open: false,
    vertical: 'button',
    horizontal: 'left',
  });
  const { vertical, horizontal, open, message } = state;



  const handleClose = () => {
    setState({ ...state, open: false });
  };

  // Function to handle restricted page navigation
  const handlePageNavigation = (page) => {
    if ((page.name === 'Create'|| page.name === 'List'|| page.name === 'About'||page.name === 'Service') && !isLogin) {
      setState({
        ...state, open: true,
        message: 'Please register or login to access this page.',
      });

    } else {
      navigate(page.path);

    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" sx={{ bgcolor: "white", color: "black", height: 'auto' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{}} >
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <CardMedia component='img' src='/logo/icons8-adventure-96.png' sx={{
              mr: 1, display: { xs: 'none', md: 'flex' },
              width: '50px', height: '50px', backgroundSize: 'cover', justifyContent: 'center', alignItems: 'center'
            }} />

            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', wordSpacing: 1 }}>
              <Typography sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 500,
                letterSpacing: '.1rem',
                color: 'black',
                textDecoration: 'none',
                fontSize: {
                  xs: '0.8rem',
                  sm: '0.75rem',
                  md: '1rem',
                  lg: '1rem',
                  xl: '1.5rem',
                },
              }}>OUTDOOR</Typography>

              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontStyle: '',
                  fontWeight: 500,
                  letterSpacing: '.1rem',
                  color: 'black',
                  textDecoration: 'none',
                  fontSize: {
                    xs: '0.8rem',
                    sm: '0.75rem',
                    md: '1rem',
                    lg: '1rem',
                    xl: '1.5rem',
                  },

                }}
              >

                ADVENTURE
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none', }, justifyContent: 'center', alignItems: 'center' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' }, }}

              >
                {pages.map((page) => (
                  <MenuItem key={page.path} onClick={handleCloseNavMenu} >
                    <Link to={page.path} key={page.path} style={{ textDecoration: 'none' }}>
                      <Typography InputProps={{ disableUnderline: true }}
                        sx={{ textAlign: 'center', color: 'black', letterSpacing: '0.0625rem' }}>{page.name}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, }} /> */}

            <Box sx={{ display: 'flex', flexDirection: 'row', textAlign: 'left', }}>
              <CardMedia component='img' src='/logo/icons8-adventure-96.PNg' sx={{
                display: { xs: 'flex', md: 'flex' },
                width: '38px', height: '38px', backgroundSize: 'cover', justifyContent: 'flex-start', alignItems: 'flex-start',
              }} />
              <Box>
                <Typography sx={{
                  mr: 2, mt: 1,
                  display: { xs: 'flex', md: 'none' },
                  fontWeight: 500,
                  letterSpacing: '.1rem',
                  color: 'black',
                  textDecoration: 'none',
                  fontSize: {
                    xs: '0.7rem',
                    sm: '0.75rem',
                    md: '1rem',
                    lg: '1rem',
                    xl: '1.5rem',
                  },
                }}>
                  OUTDOOR
                </Typography>

                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    height: '30px',
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    letterSpacing: '.1rem',
                    color: 'black',
                    textDecoration: 'none',
                    fontSize: {
                      xs: '0.7rem',
                      sm: '0.75rem',
                      md: '1rem',
                      lg: '1.5rem',
                      xl: '1.5rem',
                    },
                  }}
                >
                  ADVENTURE
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', }, }}>
              {pages.map((page) => (
                <Link to={page.path} key={page.path} underline="none" style={{ textDecoration: 'none', }}>
                  <Button onClick={() => handlePageNavigation(page)}
                    key={page.path}
                    // onClick={handleCloseNavMenu}
                    sx={{
                      my: 2, color: 'black', display: 'block',
                      letterSpacing: '0.0625rem',
                      gap: 1, justifyContent: 'center', alignItems: 'center'
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}

            </Box>

            {/* Snackbar component for alert messages */}
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
            >
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {message}
              </Alert>
            </Snackbar>

            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, }}>
                  {
                    isLogin ? (

                      <Avatar alt="Sourav"
                        src={profileDetails?.profile_pic ? profileImagePath(profileDetails.profile_pic) : 'error'}
                      />
                    ) : (
                      <Avatar 
                      alt="Sourav"
                      />
                    )
                  }

                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {
                  isLogin && (
                    <MenuItem >
                      <Typography >{firstName} {lastName}</Typography>
                    </MenuItem>
                  )
                }
                {settings.map((setting) => (
                  <MenuItem key={setting.name} onClick={() => {
                    if (setting.action) {
                      setting.action();
                    } else {
                      handleCloseUserMenu();
                    }
                  }
                  }>
                    {setting.path ? (
                      <Link to={setting.path} style={{ textDecoration: 'none' }}>
                        <Typography textDecoration='none' sx={{ textAlign: 'center', color: 'black' }}>{setting.name}</Typography>
                      </Link>
                    ) : (
                      <Typography sx={{ textAlign: 'center', color: 'black' }}>{setting.name}</Typography>
                    )}

                  </MenuItem>

                ))}

              </Menu>

            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Header;
