import { useState, useEffect } from "react";
import ContactList from "./components/ContactList/ContactList";
import css from "./App.module.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from 'nanoid';

function App() {
  
  const [inputValue, setInputValue] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
    
  }, [contacts]);

  const filteredValues = () => {
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const addContact = (newContact) => {
    const idValue = nanoid();
    setContacts(prev => [...prev, { id: idValue, ...newContact }]);
  };

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(element => element.id !== id));
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
      />
      <ContactList 
        contactData={filteredValues()} 
        deleteContact={deleteContact} 
      />
    </div>
  );
}

export default App;
