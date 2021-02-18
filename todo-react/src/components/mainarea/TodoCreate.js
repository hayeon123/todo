import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Paper,
  InputBase,
  Callapse,
  Button,
  Collapse,
} from "@material-ui/core";
import Actions from "../todo/Actions";
import TodoLabels from "../todo/Labels";
import Content from "../todo/Content";

import { useTodosStore } from "../../store";
// import { createTodo } from "../../data";

const useStyles = makeStyles((theme) => ({
  paperWrapper: {
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.short,
    }),
    borderColor: theme.custom.palette.itemBorderColor,
    borderWidth: theme.spacing(0.1),
    borderStyle: "solid",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  inputTitleRoot: {
    ...theme.custom.fontFamily.metropolis,
    padding: theme.spacing(1.25, 2),
  },
  inputTitleInput: {
    fontWeight: 500,
    fontSize: "1rem",
    padding: 0,
    lineHeight: "1rem",
    vertiacalAlign: "middle",
    color: theme.palette.text.primary,
  },
  inputNoteRoot: {
    ...theme.custom.fontFamily.roboto,
    padding: theme.spacing(1.5, 2),
  },
  inputNoteInput: {
    fontWeight: 500,
    fontSize: "0.85rem",
    padding: 0,
    color: theme.palette.text.primary,
  },
  barWrapper: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1, 2),
    justifyContent: "space-between",
  },
}));
const TodoCreate = () => {
  const classes = useStyles();
  const theme = useTheme();
  // const [, createTodoExecute] = createTodo();
  const [isFocussed, setFocussed] = useState(false);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [color, setColor] = useState("default");
  const [isCheckboxMode, setCheckboxMode] = useState(false);
  const [labels, setLabels] = useState([]);
  const [todos, dispatchTodo] = useTodosStore();
  const [id, setId] = useState(todos.length + 1);

  const onCloseClick = () => {
    const noteTexts = notes.map((noteItem) => noteItem.text);
    const labelIds = labels.map((labelItem) => labelItem.id);
    if (title || noteTexts.length > 0) {
      dispatchTodo({
        type: "CREATED",
        payload: {
          id: id,
          title: title,
          notes: noteTexts,
          labels: labelIds,
          color: color,
          isCheckboxMode: isCheckboxMode,
        },
      });
    }
    setId(todos.length + 1);
    setTitle("");
    setNotes([]);
    setColor("default");
    setCheckboxMode(false);
    setLabels([]);
    setFocussed(false);
  };
  return (
    <Paper
      elevation={2}
      classes={{ root: classes.paperWrapper }}
      style={{ backgroundColor: theme.custom.palette.noteBackground[color] }}
    >
      <Collapse
        classes={{ wrapperInner: classes.wrapper }}
        in={isFocussed}
        collapsedHeight="2.7rem"
      >
        <InputBase
          placeholder={isFocussed ? "Title" : "Take a note..."}
          classes={{
            root: isFocussed ? classes.inputTitleRoot : classes.inputNoteRoot,
            input: classes.inputTitleInput,
          }}
          onFocus={() => setFocussed(true)}
          inputProps={{ "aria-label": "note title" }}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {isFocussed ? (
          <Content
            notes={notes}
            setNotes={setNotes}
            isEditMode={true}
            isCheckboxMode={isCheckboxMode}
          />
        ) : null}
        <TodoLabels labels={labels} />
        <div className={classes.barWrapper}>
          <Actions
            id={id}
            color={color}
            setColor={setColor}
            labels={labels}
            setLabels={setLabels}
            setCheckboxMode={setCheckboxMode}
            isCreateMode={true}
            isCheckboxMode={isCheckboxMode}
          />
          <div>
            <Button size="small" onClick={onCloseClick}>
              Close
            </Button>
          </div>
        </div>
      </Collapse>
    </Paper>
  );
};

export default TodoCreate;
