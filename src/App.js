import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import PrivateRoute from './Components/Navigation/PrivateRoute';
import PublicRoute from './Components/Navigation/PublicRoute';

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
const StatView = lazy(() =>
  import('./Pages/StatView' /* webpackChunkName: "StatView"*/),
);
const CurrencyView = lazy(() =>
  import('./Pages/CurrencyView' /* webpackChunkName: "CurrencyView"*/),
);

const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Container>
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
              path="/statistics"
              element={
                <PrivateRoute>
                  <StatView />
                </PrivateRoute>
              }
            />

            <Route
              path="/currency"
              element={
                <PrivateRoute>
                  <CurrencyView />
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
