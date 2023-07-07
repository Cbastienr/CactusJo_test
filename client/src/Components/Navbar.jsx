import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    backgroundColor: '#00695',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Orbitron, sans-serif',
    letterSpacing: '1px',
  },
  menuIcon: {
    marginRight: theme.spacing(2),
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
        <IconButton color="inherit" aria-label="Products">
          <Typography variant="body1" className={classes.menuText}>
            Products
          </Typography>
        </IconButton>
        <IconButton color="inherit" aria-label="About">
          <Typography variant="body1" className={classes.menuText}>
            About
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;