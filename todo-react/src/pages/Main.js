import React from "react";
import AppBar from "../components/appbar/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import NavDrawer from "../components/navdrawer/NavDrawer";
import NotesArea from "../components/mainarea/NotesArea.js";
const Main = () => {
  return (
    <div>
      <AppBar />
      <NavDrawer />
      <Container maxWidth={false}>
        <Box mt={8}>
          <NotesArea />
        </Box>
      </Container>
    </div>
  );
};

export default Main;
