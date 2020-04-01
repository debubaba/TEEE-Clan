import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
AppBar,
Toolbar,
ListItem,
ListItemIcon,
IconButton,
ListItemText,
Avatar,
Divider,
List,
Typography,
Box,
Button

} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

const useStyles= makeStyles({
  root: {

    color: "white",
    width: "fit-content",
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    borderRadius: "50%"
  },
  buttonTextOpen: {
    background: "#000000",
    borderRadius: "50%",
    padding: "2.2rem",
    align: "center"
  },
  buttonTextClose: {
    background: "#ffffff",
    borderRadius: "50%",
    padding: "2.2rem",
    align: "center"
  },
  overlay: {
    height: "0%",
    width: "100%",
    position: "fixed",
    zIndex: 1202,
    top: "0",
    left: "0",
    backgroundColor: "rgba(0,0,0)",
    "overflow-y": "hidden",
    transition: "0.5s",
    color: "#ffffff"
  },
  ListItem: {
    color: "white",
    ":hover": {
      color: "#f1f1f1"
    },
    ":focus": {
      color: "#f1f1f1"
    }
  },
  cross: {
    color: "#000000",
    height: "4rem",
    width: "4rem"
  }

});

function openNav() {
  document.getElementByClass("overlay").style.height = "100%";
}

function closeNav() {
  document.getElementByClass("overlay").style.height = "0%";
}

const menuItems = [
    {
      listText: "Home",
      listPath: "/"
    },
    {
      listText: "Sales",
      listPath: "/sales"
    },
    {
      listText: "Design",
      listPath: "/design"
    },
    {
      listText: "Contacts"
    }
  ]

export default function Navbar(){
  const classes = useStyles();
  return(
    <Box>
      <Box className={classes.overlay}>
            <Typography variant="h1" align="center">
              TEEE Clan
            </Typography>
            <Divider />
            <List>
            {menuItems.map((isItem, key)=>(
            <ListItem button key={key} component={''} to={isItem.listPath}>
              <ListItemText
              className={classes.ListItem}
              primary={isItem.listText}
              align="center"
              />
            </ListItem>
            ))}
          </List>

      </Box>
      <Button className={classes.root} onClick='openNav()'>
        <Typography variant="h5" align="center" className={classes.buttonTextOpen}>
          TEEE <br /> Clan
        </Typography>
      </Button>
    </Box>
  )
}
