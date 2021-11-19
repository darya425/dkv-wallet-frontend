import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authOperations, authSelectors } from './Redux/auth';

import PrivateRoute from './Components/Navigation/PrivateRoute';
import PublicRoute from './Components/Navigation/PublicRoute';
import Spinner from './Components/Spinner';

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
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute restricted>
                <LoginView />
              </PublicRoute>
            }
          />

          <Route
            path="/login"
            redirectTo="/home"
            restricted
            element={
              <PublicRoute restricted>
                <LoginView />
              </PublicRoute>
            }
          />

          <Route
            path="/register"
            restricted
            element={
              <PublicRoute restricted>
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
        </Routes>
      </Suspense>
    )
  );
};

export default App;
