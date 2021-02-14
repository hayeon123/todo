import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  listItemRoot: {
    borderRadius: theme.spacing(0, 3, 3, 0),
  },
  listItemSelected: {
    backgroundColor: `${theme.palette.secondary.light}!important`,
  },
}));

const DrawerItem = ({ text, icon, isSelected, onClick }) => {
  const classes = useStyles();
  return (
    <ListItem
      button
      selected={isSelected}
      classes={{
        selected: classes.listItemSelected,
        root: classes.listItemRoot,
      }}
      onClick={onClick}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default DrawerItem;
