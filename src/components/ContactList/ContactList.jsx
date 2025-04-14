import css from "../ContactList/ContactList.module.css";
import Contacts from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { useSelector } from "react-redux";
export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return (
          <li className={css.listItem} key={contact.id}>
            <Contacts contacts={contact}></Contacts>
          </li>
        );
      })}
    </ul>
  );
}
