import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Popover, Checkbox } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { DoneOutlined as CheckIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  popover: {
    width: theme.spacing(17),
    height: theme.spacing(13.5),
    borderRadius: theme.spacing(0.5),
    background: theme.palette.background.default,
  },
  container: {
    margin: theme.spacing(0.8),
    display: "grid",
    gridGap: theme.spacing(0.5),
    gridTemplateRows: `repeat(3, ${theme.spacing(3.5)}px)`,
    gridTemplateColumns: `repeat(4, ${theme.spacing(3.5)}px)`,
    justifyItems: "center",
    alignItems: "center",
  },
  checkboxRoot: {
    padding: "0px !important",
  },
  colorCircle: {
    height: theme.spacing(3.5),
    width: theme.spacing(3.5),
    margin: "auto",
    borderRadius: "50%",
    display: "inline-block",
    borderStyle: "solid",
    borderColor: "transparent",
    borderWidth: "2px",
  },
}));

const ColorPopover = ({
  anchorEl,
  currentColor,
  isOpen,
  onClose,
  onColorSelect,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const id = isOpen ? "color-popover" : undefined;
  const [selectedColor, setSelectedColor] = useState(currentColor);
  const onSelectColor = (color) => {
    setSelectedColor(color);
    onColorSelect(color);
    onClose();
  };
  return (
    <div>
      <Popover
        id={id}
        open={isOpen}
        anchorEl={anchorEl}
        anchorOrigin={{
          vetical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          varitical: "bottom",
          horizontal: "left",
        }}
        classes={{
          paper: classes.popover,
        }}
      >
        <div className={classes.container}>
          {Object.keys(theme.custom.palette.noteBackground).map((colorkey) => (
            <ColorItem
              key={colorkey}
              color={theme.custom.palette.noteBackground[colorkey]}
              isChecked={selectedColor === colorkey}
              onClick={() => onSelectColor(colorkey)}
            />
          ))}
        </div>
      </Popover>
    </div>
  );
};
const ColorItem = ({ color, isChecked, onClick: onPressed }) => {
  const classes = useStyles();
  return (
    <Checkbox
      classes={{ root: classes.checkboxRoot }}
      icon={<ColorUnselected color={color} />}
      checkedIcon={<ColorSelected color={color} />}
      color="default"
      checked={isChecked}
      onClick={() => onPressed(color)}
    />
  );
};
const ColorUnselected = ({ color }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <span
      className={classes.colorCircle}
      style={{
        backgroundColor: color,
        bordercolor: color === "#FFF" ? theme.palete.divider : "transparent",
      }}
    />
  );
};
const ColorSelected = ({ color }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <span
      className={classes.colorCircle}
      style={{
        backgroundColor: color,
        bordercolor: theme.custom.palette.iconHighlight,
      }}
    >
      <CheckIcon htmlColor={theme.custom.palette.noteColorCheck} />
    </span>
  );
};
export default ColorPopover;
