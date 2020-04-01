import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Toolbar,
   List,
  CssBaseline,
  Typography,
   Divider,
   IconButton,
   ListItem,
    ListItemIcon,
    ListItemText,
    Backdrop,
    Button,
    Grid,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import InboxIcon from '@material-ui/icons/Inbox'
import MailIcon from '@material-ui/icons/Mail'
import FilterListIcon from '@material-ui/icons/FilterList';

import {
  Link,
  Route,
  Router
} from 'react-router-dom'
import { createBrowserHistory } from "history";

import MenSect from './menSect.js'
import WomenSect from './womenSect.js'
import LimitedSect from './limitedSect.js'
import Filters from './filter.js'
import Navbar from './Navbar.js'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflowX: "hidden",
    minHeight: "100%"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#000000"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),

    background: "#385C5B",
    color: "#9DAB57"
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    background: "#385C5B",
    color: "#9DAB57",
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: "#1C485D",
    minHeight: "100%",
  },
  list: {
    backgroundColor: "#385C5B"
  },
  filter: {
    position: "absolute",
    right: 10,
    color: "#ffffff",
    borderColor: "#ffffff"
  },
  icon: {
    color: "#9DAB57",
  }

}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [opens, setOpens] = React.useState(false);
  const handleClose = () => {
    setOpens(false);
  };
  const handleToggle = () => {
    setOpens(!opens);
  };

  const history = createBrowserHistory();
  const drawerItems = [
      {
        listText: "Men's Section",
        listIcon: <InboxIcon className={classes.icon}/>,
        listPath: "/sales/men"
      },
      {
        listText: "Women's Section",
        listIcon: <InboxIcon className={classes.icon} />,
        listPath: "/sales/women"
      },
      {
        listText: "Limited Edition",
        listIcon: <InboxIcon className={classes.icon} />,
        listPath: "/sales/limited"
      }
    ]

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Button
          variant="outlined"
          onClick={handleToggle}
          className={classes.filter}>
            <FilterListIcon style={{zIndex: "3"}} />
          </Button>
          <Backdrop
          className={classes.backdrop}
          open={opens}
           >
            <Filters />
          </Backdrop>
        </Toolbar>
      </AppBar>
      <Router history={history}>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <Divider />
            <List className={classes.list}>
              {drawerItems.map((isItem, key) => (
                <ListItem
                button
                key={key}
                component={Link}
                to={isItem.listPath}>
                  <ListItemIcon>{isItem.listIcon}</ListItemIcon>
                  <ListItemText primary={isItem.listText} />
                </ListItem>
              ))}
            </List>
            <Divider />

          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Route exact path="/sales/men" component={MenSect} />
            <Route exact path="/sales/women" component={WomenSect} />
            <Route exact path="/sales/limited" component={LimitedSect} />
            <Navbar />
          </main>
        </Router>
    </div>
  );
}
