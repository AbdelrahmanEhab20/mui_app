import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import AddComponent from "./components/AddComponent";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [myMode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: myMode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-evenly">
          <Sidebar setMode={setMode} mode={myMode} />
          <Feed />
          <RightBar />
        </Stack>
        <AddComponent />
      </Box>
    </ThemeProvider>
  );
}

export default App;
