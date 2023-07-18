import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useColorMode, Box } from '@chakra-ui/react';
import LandingHeader from './layouts/headers/Landing.header';
import routes from './routes/routes';
import ScrollToTop from './ScrollToTop';

// Component to conditionally render the LandingHeader based on route
function HeaderRoutes() {
  const location = useLocation();
  const shouldRenderHeader = !['/login', '/signup', '/forgot-password'].includes(location.pathname);

  // Render LandingHeader if shouldRenderHeader is true, otherwise null
  return shouldRenderHeader ? <LandingHeader /> : null;
}
function App() {
  
  const { colorMode } = useColorMode();
  return (
    <BrowserRouter>
      <Box className='App' color={colorMode === 'light' ? 'white' : '#5f6368'}>
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
      </Box>
    </BrowserRouter>
  );
}

export default App;
