import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ deleteContact }) => {
  const contactData = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contactData.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.list}>
      {visibleContacts.map((element) => (
        <li key={element.id}>
          <Contact
            id={element.id}
            name={element.name}
            phoneNumber={element.number}
            deleteContact={deleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
