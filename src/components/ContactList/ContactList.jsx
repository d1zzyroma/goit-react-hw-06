import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"
const ContactList = ( {contactData, deleteContact} ) => {
    return(
        <ul className={css.list}>
            {contactData.map((element) =>{
                return  <li key={element.id}><Contact id={element.id} name={element.name} phoneNumber={element.number} deleteContact={deleteContact}/></li>
                
            })}
        </ul>
    )
}
export default ContactList;