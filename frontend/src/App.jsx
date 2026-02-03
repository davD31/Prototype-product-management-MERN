import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import CreatePage from "./Pages/CreatePage";
import HomePage from "./Pages/HomePage";
import Navbar from "./components/Navbar";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
      <Toaster position="bottom-right" />
    </Box>
  );
}

export default App;