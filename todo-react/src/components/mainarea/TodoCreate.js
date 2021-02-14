import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Paper, InputBase, Callapse, Button } from "@material-ui/core";
import TodoActions from "../todo/Actions";
import TodoLabels from "../todo/Labels";
import TodoContent from "../todo/Content";

import { useTodosStore } from "../../store";

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
  inpuTitleRoot: {
    ...theme.custom.fontFamily.metropolis,
    padding: theme.spacing(1.25, 2),
  },
}));
const TodoCreate = () => {
  return <div></div>;
};

export default TodoCreate;
