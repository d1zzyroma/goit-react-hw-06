import man from "./man.svg";
import phone from "./phone.svg";
import css from "./Contact.module.css";

const Contact = ({ name, phoneNumber, id, deleteContact }) => {
  return (
    <div>
      <div className={css.rowCenter}>
        <div className={css.column}>
          <div className={css.row}>
            <img src={man} alt="" width={40} />
            <p className={css.text}>{name}</p>
          </div>
          <div className={css.row}>
            <img src={phone} alt="" width={40}/>
            <p className={css.text}>{phoneNumber}</p>
          </div>
        </div>
        <div>
          <button className={css.btn} onClick={() => deleteContact(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
