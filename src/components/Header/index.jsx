// import { DataContext } from 'features/ShopingCart/DataProviderr';
import { Avatar, Box, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';
import { logout } from '../../features/Auth/userSice';
import { DataContext } from '../DataProvider';
import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MODE = {
  LOGIN : 'login',
  REGISTER: 'register'
};

export default function Header() {
  
   const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null); 

  const value = useContext(DataContext)
   const [cart] = value.cart
  
   const loggedInUser = useSelector(state => state.user.current);
   const isLoggedIn = !!loggedInUser.id ;

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
  const handleUserClick = (e) => {
     setAnchorEl(e.currentTarget);
  };

const handleCloseMenu = () => {
   setAnchorEl(null);
};

const handldeLogutClick = () => {
  const action = logout();
  dispatch(action);
}

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           <Link to="/" >ĐỒNG HỒ</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
           <Link to="/product" > PRODUCTS </Link>
          </Typography>

           <div className="cart-icon">
               <Link to="/cart">
                 <span>{cart.length}</span>
                 <ShoppingCartIcon />
               </Link>
           </div>

           {!isLoggedIn && (
            <Button color="inherit" onClick={handleClickOpen}>LOGIN</Button>
           )}

           {isLoggedIn && (
               <IconButton color="inherit" onClick={handleUserClick}>
                 <AccountCircle />
               </IconButton>
           )}

  

     
           
        </Toolbar>
      </AppBar>
      
      <Menu
       keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
        }}
       transformOrigin={{
        vertical: 'top',
       horizontal: 'right',
         }}
      getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handldeLogutClick}>Logout</MenuItem>
      </Menu>
       
      <Dialog
      disableBackdropClick 
      disableEscapeKeyDown
       open={open} 
       onClose={handleClose} 
       aria-labelledby="form-dialog-title">
       
       <DialogContent>
        {mode === MODE.REGISTER && (
          <>
          <Register closeDialog={handleClose}  />
           <Box textAlign="center" onClick={() => setMode(MODE.LOGIN)}>
               SANG ĐĂNG NHẬP 
           </Box>
          </>
        )}

        {mode === MODE.LOGIN && (
          <>
          <Login closeDialog={handleClose} />
           <Box textAlign="center" onClick={() => setMode(MODE.REGISTER)}>
               SANG ĐĂNG KÝ 
           </Box>
          </>
        )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
        
      </Dialog>
    </div>
  );
}
