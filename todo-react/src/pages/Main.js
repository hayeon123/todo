import React from "react";
import AppBar from "../components/appbar/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import NavDrawer from "../components/navdrawer/NavDrawer";
import NotesArea from "../components/mainarea/NotesArea.js";
import Loading from "./Loading";
import {
  TodosProvider,
  LabelsProvider,
  UiProvider,
  UserProvider,
  useUserStore,
  useTodosStore,
  useLabelsStore,
} from "../store";
import { dark, light } from "../theme";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { getTodosAndLabels } from "../data";
const Main = ({ navigate }) => {
  const data = getTodosAndLabels();
  if (data) {
    return (
      <MainComponent todos={data.todos} labels={data.labels} user={data.user} />
    );
  } else {
    return <Loading />;
  }
};
const MainComponent = ({ todos, labels, user }) => {
  return (
    <TodosProvider todos={todos}>
      <LabelsProvider labels={labels}>
        <UserProvider user={user}>
          <UiProvider>
            <ThemeControlledComponent />
          </UiProvider>
        </UserProvider>
      </LabelsProvider>
    </TodosProvider>
  );
};
const ThemeControlledComponent = () => {
  const [{ isDarkMode }] = useUserStore();
  const [, dispatchTodo] = useTodosStore();
  const [, dispatchLabel] = useLabelsStore();
  // const handleSubscribeTodos = (_, data) => {
  //   if (data && data.todoStream) {
  //     dispatchTodo({
  //       type: data.todoStream.action,
  //       payload: data.todoStream.todo,
  //     });
  //   }
  // };
  // const handleSubscribeLabels = (_, data) => {
  //   if (data && data.labelStream) {
  //     dispatchLabel({
  //       type: data.labelStream.action,
  //       payload: data.labelStream.todo,
  //     });
  //   }
  // };
  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <CssBaseline />
      <AppBar />
      <NavDrawer />
      <Container maxWidth={false}>
        <Box mt={8}>
          <NotesArea />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Main;
