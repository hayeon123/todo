import React, { useEffect } from "react";
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
import { getTodos, getTodosAndLabels } from "../data";

// App.js에서 호출하는 컴포넌트 실제 data
const Main = ({ navigate }) => {
  const data = getTodosAndLabels();
  console.log(getTodos());
  if (data) {
    return (
      <MainComponent todos={data.todos} labels={data.labels} user={data.user} />
    );
  } else {
    return <Loading />;
  }
};

//data를 각각의 Provider에 넣음
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

// Ui 설정
const ThemeControlledComponent = () => {
  const [{ isDarkMode }] = useUserStore();
  // const [todos, dispatchTodo] = useTodosStore();

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
