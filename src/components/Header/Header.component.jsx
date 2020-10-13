import React, { useState } from "react";
import "./Header.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { Link } from "react-router-dom";

const HideOnScroll = (props) => {
  const { window, children } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: { flexGrow: 1 },
  drawerPaper: {
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Divider />
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => setOpen(false)}>
            {theme.direction === "ltr" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
            <Button
              color="inherit"
              onClick={() => setOpen(false)}
              component={Link}
              to="/"
            >
              HOME
            </Button>
          </ListItem>
          <Divider />
          <ListItem>
            <Button
              color="inherit"
              onClick={() => setOpen(false)}
              component={Link}
              to="/menu"
            >
              MENU
            </Button>
          </ListItem>
          <Divider />
          <ListItem>
            <Button
              color="inherit"
              onClick={() => setOpen(false)}
              component={Link}
              to="/members"
            >
              MEMBERS
            </Button>
          </ListItem>
          <Divider />
          <ListItem>
            <Button
              color="inherit"
              onClick={() => setOpen(false)}
              component={Link}
              to="blog"
            >
              BLOG
            </Button>
          </ListItem>
          <Divider />
          <ListItem>
            <Button
              color="inherit"
              onClick={() => setOpen(false)}
              component={Link}
              to="shop"
            >
              SHOP
            </Button>
          </ListItem>
          <Divider />
          <ListItem>
            <Button
              color="inherit"
              onClick={() => setOpen(false)}
              component={Link}
              to="booking"
            >
              BOOK ONLINE
            </Button>
          </ListItem>
          <Divider />
          <ListItem>
            <Button
              color="inherit"
              onClick={() => setOpen(false)}
              component={Link}
              to="more"
            >
              MORE
            </Button>
          </ListItem>
        </List>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar color="primary">
          <Toolbar>
            <div className="header_brand">
              <IconButton
                component={Link}
                to="/"
                style={{ padding: 0, margin: 0 }}
              >
                <img
                  src="https://i.ibb.co/8x6kX6j/MSEF-Logo.png"
                  alt="logo"
                  className="header_brand_logo"
                />
              </IconButton>
              <Typography className="header_brand_name" variant="h6">
                EAGLE REBIRTH
              </Typography>
            </div>
            <Hidden smDown>
              <div className="header_items">
                <Button color="inherit" component={Link} to="/">
                  HOME
                </Button>
                <Button color="inherit" component={Link} to="menu">
                  MENU
                </Button>
                <Button color="inherit" component={Link} to="members">
                  MEMBERS
                </Button>
                <Button color="inherit" component={Link} to="blog">
                  BLOG
                </Button>
                <Button color="inherit" component={Link} to="shop">
                  SHOP
                </Button>
                <Button color="inherit" component={Link} to="booking">
                  BOOK ONLINE
                </Button>
                <Button color="inherit" component={Link} to="more">
                  MORE
                </Button>
              </div>
            </Hidden>
            <Hidden mdUp>
              <IconButton
                style={{ color: "#fff" }}
                aria-label="Open Drawer"
                adge="start"
                onClick={() => setOpen(!open)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        variant="temporary"
        anchor="right"
        open={open}
        onClose={() => setOpen(!open)}
        classes={{ paper: classes.drawerPaper }}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </div>
  );
};

export default Header;
