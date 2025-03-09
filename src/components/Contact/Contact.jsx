import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.contact}>
      <span>
        {name}: {number}
      </span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;
