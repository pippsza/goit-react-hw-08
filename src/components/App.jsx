import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAll } from "../redux/contacts/contactsOps";
import Layout from "./Layout/Layout";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
const ContactsPage = lazy(() => import(`../pages/ContactsPage`));
const HomePage = lazy(() => import(`../pages/HomePage`));
const PrivateRoute = lazy(() => import(`./PrivateRoute`));
const RestrictedRoute = lazy(() => import(`./RestrictedRoute`));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <Layout>
      <div className={css.mainApp}>
        <Suspense
          fallback={
            <p>
              <b>Loading page...</b>
            </p>
          }
        ></Suspense>
        <Routes>
          <Route
            path="/contacts"
            element={<ContactsPage></ContactsPage>}
          ></Route>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/tasks"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/tasks" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Routes>
      </div>
    </Layout>
  );
}
