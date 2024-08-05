import { useSelector, useDispatch } from "react-redux";
import Contact from "../Contact/Contact";
import { deleteContact } from "../../redux/contactsSlice"; // Імпортуйте дію deleteContact з вашого slice
import css from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contactData = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contactData.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {visibleContacts.map((element) => (
        <li key={element.id}>
          <Contact
            id={element.id}
            name={element.name}
            phoneNumber={element.number}
            deleteContact={() => handleDeleteContact(element.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
