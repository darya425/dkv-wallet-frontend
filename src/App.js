import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import PrivateRoute from './Components/Navigation/PrivateRoute';
import PublicRoute from './Components/Navigation/PublicRoute';

import muiTheme from './Components/UI/muiTheme';
import Header from './Components/Header';

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
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route
            path="/"
            redirectTo="/home"
            restricted
            exact
            element={
              <PublicRoute>
                <LoginView />
              </PublicRoute>
            }
          />

          <Route
            path="/register"
            restricted
            element={
              <PublicRoute>
                <RegisterView />
              </PublicRoute>
            }
          />

          <Route
            path="/home"
            element={
              <PublicRoute>
                <Header />
                <HomeView />
              </PublicRoute>
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
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
