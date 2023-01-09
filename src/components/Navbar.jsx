import * as React from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import FlexBox from "./FlexBox";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        height: "70px",
    }
})
const navItems = ["Home", "Services", "Pricing", "About Us"];

function DrawerAppBar(props) {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:670px)");
  const [openDrawer, setOpenDrawer] = useState(false);
  const Drawer = () => {
    return (
      <Box sx={{ textAlign: "center", alignItems: "center" }}>
        <MenuIcon sx={openDrawer ? {marginTop: "15px",marginRight: "-80px"}:{marginTop: "15px", position: "static"}} onClick={() => setOpenDrawer(!openDrawer)} />
        {openDrawer && (
        <List sx={{zIndex: "2", bgcolor: "#6770ef", color: "#fff", overflow: "visible"}}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "start" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        )}
      </Box>
    );
  };

  return (
    <Box className={classes.root}>
      <FlexBox justifyContent="space-between">
        <Box>
          <img
            src="/Group114.png"
            alt="nabar-icon"
            width={matches ? 90 : 150}
            style={{ opacity: "1" }}
          />
        </Box>
        {matches ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Box
                key={item}
                sx={{ paddingLeft: "10px", paddingRight: "10px" }}
              >
                {item}
              </Box>
            ))}
            <Box
              sx={{
                bgcolor: "#6770ef",
                color: "#ffff",
                padding: "10px",
                borderRadius: "2px",
                opacity: "1",
              }}
            >
              Start a Company
            </Box>
          </Box>
        ) : (
          <Drawer />
        )}
      </FlexBox>
    </Box>
  );
}

export default DrawerAppBar;
