import SearchBox from "./SearchBox/SearchBox";
import css from "./App.module.css";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAll } from "../redux/contactsOps";
import Error from "./Error/Error";
import { selectError, selectLoading } from "../redux/contactsSlice";
import Loader from "./Loader/Loader";
import { selectContacts } from "../redux/contactsSlice";
export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div className={css.mainApp}>
      <h1> Phonebook</h1>
      <ContactForm />
      <SearchBox /> {isLoading && <Loader>Loading message</Loader>}
      {isError && <Error>Error message</Error>}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}
