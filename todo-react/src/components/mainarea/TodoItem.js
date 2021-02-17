import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Fade, ClickAwayListener, useTheme } from "@material-ui/core";
import ActionBar from "../todo/Actions";
import LabelsBar from "../todo/Labels";
import ContentTitle from "../todo/ContentTitle";
import Content from "../todo/Content";
import { useUiStore, useTodoStore, useTodosStore } from "../../store";
// import { updateTodo } from "../../data";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    borderColor: theme.custom.palette.itemBorderColor,
    borderWidth: theme.spacing(0.1),
    borderSytle: "solid",
  },
  textTitle: {
    ...theme.custom.fontFamily.metropolis,
    padding: theme.spacing(1.5, 2, 0, 2),
    fontWeight: 500,
    fontSize: "1rem",
    color: theme.palette.text.primary,
    lineHeight: theme.spacing(0.18),
  },
  barWrapper: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1, 2),
    justifyContent: "space-between",
  },
}));

const TodoItem = ({ noteItem, isEditMode }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [isHovered, setHovered] = useState(false);
  const [title, setTitle] = useState(noteItem.title);
  const [noteinputs, setNotes] = useState(noteItem.notes);
  const [color, setColor] = useState(noteItem.color);
  const [isCheckboxMode, setCheckboxMode] = useState(noteItem.isCheckboxMode);
  const [labels, setLabels] = useState(noteItem.labels);
  const [, { setNoteInEditMode }] = useUiStore();
  const [, dispatchTodo] = useTodosStore();
  // const [, updateTodoExecute] = updateTodo();

  const updateColor = (color) => {
    setColor(color);
    updateTodoItem({ color });
  };
  const updateLabels = (labels) => {
    setLabels(labels);
    updateTodoItem({ labels: labels.map((label) => label.id) });
  };
  const updateCheckboxMode = (isCheckboxMode) => {
    setCheckboxMode(isCheckboxMode);
    updateTodoItem({ isCheckboxMode });
  };
  const onAfterEdit = () => {
    updateTodoItem({});
    setNoteInEditMode("");
  };
  const updateTodoItem = (todoItem) => {
    console.log(todoItem);
    dispatchTodo({
      type: "UPDATED",
      payload: {
        id: noteItem.id,
        title: todoItem.title || title,
        note:
          todoItem.note ||
          noteinputs.map((note) => {
            return { text: note.text, isCompleted: note.isCompleted };
          }),
        color: todoItem.color || color,
        isCheckboxMode: todoItem.isCheckboxMode || isCheckboxMode,
        labels: todoItem.labels,
      },
    });
  };
  return (
    <Paper
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={classes.wrapper}
      elevation={isHovered || isEditMode ? 2 : 0}
      style={{ backgroundColor: theme.custom.palette.noteBackground[color] }}
    >
      <ClickAwayListener
        onClickAway={isEditMode ? () => onAfterEdit() : () => {}}
      >
        <div onClick={() => setNoteInEditMode(noteItem.id)}>
          <ContentTitle
            title={title}
            setTitle={setTitle}
            isEditMode={isEditMode}
          />
          <Content
            notes={noteinputs}
            setNotes={setNotes}
            isEditMode={isEditMode}
            isCheckboxMode={isCheckboxMode}
          />
        </div>
      </ClickAwayListener>
      <LabelsBar labels={labels} />
      <Fade in={isHovered || isEditMode}>
        <div className={classes.barWrapper}>
          <ActionBar
            id={noteItem.id}
            color={color}
            setColor={updateColor}
            labels={labels}
            setLabels={updateLabels}
            setCheckboxMode={updateCheckboxMode}
            isCreateMode={false}
            isCheckboxMode={isCheckboxMode}
          />
        </div>
      </Fade>
    </Paper>
  );
};

export default TodoItem;
