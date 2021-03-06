import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, Icon, IconButton, Tooltip } from "@material-ui/core";
import {
  PaletteOutlined as PaletteIcon,
  LabelOutlined as LabelIcon,
  DeleteOutlineOutlined as DeleteIcon,
  FileCopyOutlined as CopyIcon,
  CheckBoxOutlined as CheckBoxIcon,
  IndeterminateCheckBoxOutlined as HideCheckBoxIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import ColorPopover from "./ColorPopover";
import LabelPopover from "./LabelPopover";
import { useTodosStore } from "../../store";
// import { copyTodo, deleteTodo } from "../../data";
const useStyles = makeStyles((theme) => ({
  optionsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionWrapperFirst: {
    padding: theme.spacing(0, 1, 0, 0),
  },
  optionWrapperLast: {
    padding: theme.spacing(0, 0, 0, 1),
  },
  optionWrapper: {
    padding: theme.spacing(0, 1),
  },
  barClose: {},
}));
const Actions = ({
  id,
  labels,
  setLabels,
  color,
  setColor,
  setCheckboxMode,
  isCreateMode,
  isCheckboxMode,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const refActionColor = useRef();
  const refActionLabel = useRef();
  const [isColorPopoverOpen, setColorPopoverOpen] = useState(false);
  const [isLabelPopoverOpen, setLabelPopoverOpen] = useState(false);
  const [todos, dispatchTodo] = useTodosStore();
  // const [, copyNoteExecute] = copyTodo();
  // const [, deleteNoteExecute] = deleteTodo();
  const copyNote = () => {
    let data;
    todos.forEach((todo) => {
      if (todo.id === id) {
        data = todo;
      }
    });
    data.id = todos.length + 1;
    dispatchTodo({ type: "CREATED", payload: data });
  };

  const deleteNote = () => {
    let data;
    todos.forEach((todo) => {
      if (todo.id === id) {
        data = todo;
      }
    });
    dispatchTodo({ type: "DELETED", payload: data });
  };
  return (
    <>
      <div className={classes.optionsWrapper}>
        <div className={classes.optionWrapperFirst}>
          <Tooltip title="Change color">
            <IconButton
              size="small"
              area-label="change color"
              ref={refActionColor}
              onClick={() => setColorPopoverOpen(true)}
            >
              <PaletteIcon
                htmlColor={theme.custom.palette.iconHighlight}
                fontSize="small"
              />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.optionWrapper}>
          <Tooltip title="Show checkboxes">
            <IconButton
              size="small"
              aria-label="show checkbox"
              onClick={() => setCheckboxMode(!isCheckboxMode)}
            >
              {isCheckboxMode ? (
                <HideCheckBoxIcon
                  htmlColor={theme.custom.palette.iconHighlight}
                  fontSize="small"
                />
              ) : (
                <CheckBoxIcon
                  htmlColor={theme.custom.palette.iconHighlight}
                  fontSize="small"
                />
              )}
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.optionWrapper}>
          <Tooltip title="Change labels">
            <IconButton
              size="small"
              aria-label="change labels"
              ref={refActionLabel}
              onClick={() => setLabelPopoverOpen(true)}
            >
              <LabelIcon
                htmlColor={theme.custom.palette.iconHighlight}
                fontSize="small"
              />
            </IconButton>
          </Tooltip>
        </div>
        {isCreateMode ? null : (
          <>
            <div className={classes.optionWrapper}>
              <Tooltip title="Make a copy">
                <IconButton
                  size="small"
                  aria-label="make a copy"
                  onClick={copyNote}
                >
                  <CopyIcon
                    htmlColor={theme.custom.palette.iconHighlight}
                    fontSize="small"
                  />
                </IconButton>
              </Tooltip>
            </div>

            <div className={classes.optionWrapperLast}>
              <Tooltip title="Delete note">
                <IconButton
                  size="small"
                  aria-label="delete note"
                  onClick={deleteNote}
                >
                  <DeleteIcon
                    htmlColor={theme.custom.palette.iconHighlight}
                    fontSize="small"
                  />
                </IconButton>
              </Tooltip>
            </div>
          </>
        )}
      </div>
      <ColorPopover
        anchorEl={refActionColor.current}
        isOpen={isColorPopoverOpen}
        onClose={() => setColorPopoverOpen(false)}
        currentColor={color}
        onColorSelect={(color) => setColor(color)}
      />
      <LabelPopover
        anchorEl={refActionLabel.current}
        isOpen={isLabelPopoverOpen}
        setLabels={setLabels}
        labels={labels}
        onClose={() => setLabelPopoverOpen(false)}
      />
    </>
  );
};

export default Actions;
