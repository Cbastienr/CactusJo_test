import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './fonts.css';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    backgroundColor: '#00796b',
  },
  title: {
    fontSize: '40px',
    fontFamily: 'Rubik Puddles, cursive',
    color: theme.palette.primary.contrastText,
  },
  menuIcon: {
    marginRight: theme.spacing(2),
  },
  menuContainer: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'flex-end',
  },
  menuText: {
    marginRight: 'auto',
    fontFamily: 'Rubik Puddles, cursive',
  },
  
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="Menu" className={classes.menuIcon}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          CactusJo
        </Typography>
        <div className={classes.menuContainer}>
          <div className={classes.topRight}>
            <IconButton color="inherit" aria-label="Products">
              <Typography variant="body1" className={classes.menuText}>
                Products
              </Typography>
            </IconButton>
          </div>
          <div className={classes.topRight}>
            <IconButton color="inherit" aria-label="About">
              <Typography variant="body1" className={classes.menuText}>
                About
              </Typography>
            </IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;