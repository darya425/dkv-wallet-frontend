import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import PrivateRoute from './Components/Navigation/PrivateRoute';
import PublicRoute from './Components/Navigation/PublicRoute';

import Navigation from './Components/Navigation';
import Container from './Components/UI/Container';
import muiTheme from './Components/UI/muiTheme';
const LoginView = lazy(() =>
  import('./Pages/LoginView' /* webpackChunkName: "LoginView"*/),
);
const RegisterView = lazy(() =>
  import('./Pages/RegisterView' /* webpackChunkName: "RegisterView"*/),
);
const HomeView = lazy(() =>
  import('./Pages/HomeView' /* webpackChunkName: "HomeView"*/),
);
const DiagramView = lazy(() =>
  import('./Pages/DiagramView' /* webpackChunkName: "DiagramView"*/),
);

const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Container>
        {/* <Navigation /> */}

        <Suspense fallback={'Loading...'}>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomeView />
                </PrivateRoute>
              }
            />

            <Route
              path="/user"
              element={
                <PrivateRoute>
                  <p>User</p>
                </PrivateRoute>
              }
            />
            <Route
              path="/diagram"
              element={
                <PrivateRoute>
                  <DiagramView />
                </PrivateRoute>
              }
            />

            <Route
              path="/login"
              redirectTo="/user"
              restricted
              element={
                <PublicRoute>
                  <LoginView />
                </PublicRoute>
              }
            />

            <Route
              path="/register"
              redirectTo="/login"
              restricted
              element={
                <PublicRoute>
                  <RegisterView />
                </PublicRoute>
              }
            />
          </Routes>
        </Suspense>
      </Container>
    </ThemeProvider>
  );
};

export default App;
