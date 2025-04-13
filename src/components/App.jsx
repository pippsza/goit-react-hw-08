import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../redux/auth/operations";
import Layout from "./Layout/Layout";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
import { selectIsRefreshing } from "../redux/auth/selectors";
const ContactsPage = lazy(() => import(`../pages/ContactsPage`));
const HomePage = lazy(() => import(`../pages/HomePage`));
const PrivateRoute = lazy(() => import(`./PrivateRoute`));
const RestrictedRoute = lazy(() => import(`./RestrictedRoute`));
const NotFoundPage = lazy(() => import(`../pages/NotFoundPage`));
// pippsza@gmail.com
export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <span className={css.loader}></span>
  ) : (
    <Layout>
      <Toaster
        toastOptions={{
          duration: 3000,
          style: {
            background: "white",
            color: "black",
            border: "black solid 2px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          },
        }}
      />
      <div className={css.mainApp}>
        <Suspense fallback={<span className={css.loader}></span>}>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegistrationPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              }
            />
            <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
          </Routes>
        </Suspense>
      </div>
    </Layout>
  );
}
