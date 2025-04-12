import css from "../Contact/contacts.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contacts({ contacts: { name, number, id } }) {
  const dispatch = useDispatch();
  const deleteContactFunc = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.info}>
      <div>
        <div className={css.iconWrapper}>
          <AiOutlineUser />

          <p>{name}</p>
        </div>
        <div className={css.iconWrapper}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.button}
        onClick={() => {
          deleteContactFunc(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
