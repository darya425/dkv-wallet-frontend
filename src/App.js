import { lazy, Suspense } from 'react';
import { Routes } from 'react-router-dom';
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

        {/* <Suspense fallback={'Loading...'}>
        <Routes>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>

          <PrivateRoute path="/user">
            <p>User</p>
          </PrivateRoute>

          <PrivateRoute path="/diagram">
            <DiagramView />
          </PrivateRoute>

          <PublicRoute path="/login" redirectTo="/user" restricted>
            <LoginView />
          </PublicRoute>

          <PublicRoute path="/register" redirectTo="/login" restricted>
            <RegisterView />
          </PublicRoute>
        </Routes>
      </Suspense> */}
      </Container>
    </ThemeProvider>
  );
};

export default App;
