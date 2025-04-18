import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import Error from "../components/Error/Error";
import ContactList from "../components/ContactList/ContactList";
import Loader from "../components/Loader/Loader";
import { selectError, selectLoading } from "../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAll } from "../redux/contacts/operations";

import { selectContacts } from "../redux/contacts/selectors";
export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
  return (
    <>
      <h1> Phonebook</h1>
      <ContactForm />
      <SearchBox /> {isLoading && <Loader />}
      {isError && <Error>Error message</Error>}
      {contacts.length > 0 && <ContactList />}
    </>
  );
}
