import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { PaletteMode } from "@mui/material";

function App() {
  const [mode, setMode] = useState<PaletteMode>("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar
            mode={mode}
            setMode={(newMode: string) => setMode(newMode as PaletteMode)}
          />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
