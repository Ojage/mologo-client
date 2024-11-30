import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { useColorMode, Box } from "@chakra-ui/react";
import LandingHeader from "./layouts/headers/Landing.header";
import routes from "./routes/routes";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer/Footer";
import { kindpicTheme } from "./assets/styles/theme";
import "./App.css";

// Component to conditionally render the LandingHeader based on route
function HeaderRoutes() {
  const location = useLocation();
  const shouldRenderHeader = ![
    "/login",
    "/signup",
    "/forgot-password",
  ].includes(location.pathname);

  // Render LandingHeader if shouldRenderHeader is true, otherwise null
  return shouldRenderHeader ? <LandingHeader /> : null;
}
function App() {
  const { colorMode } = useColorMode();
  return (
      <ChakraProvider theme={kindpicTheme}>
    <BrowserRouter>
      <Box className="App" color={colorMode === "light" ? "white" : "#5f6368"}>
        {/* Render the HeaderRoutes component */}
        <HeaderRoutes />

        <Routes>
          {/* Map over the routes array and render each route */}
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
