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
              <PrivateRoute>
                <Header />
                <HomeView />
              </PrivateRoute>
            }
          />

          <Route
            path="/statistics"
            element={
              <PrivateRoute>
                <Header />
                <StatView />
              </PrivateRoute>
            }
          />

          <Route
            path="/currency"
            element={
              <PrivateRoute>
                <Header />
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
