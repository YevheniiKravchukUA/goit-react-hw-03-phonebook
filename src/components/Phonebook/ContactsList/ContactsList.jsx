import PropTypes from 'prop-types';
import css from 'components/Phonebook/ContactsList/ContactsList.module.css';

export function ContactsList({ contacts, deleteContact }) {
  return (
    <ul className={`${css.list}`}>
      {contacts.map(({ name, number }) => {
        return (
          <li className={`${css.item}`} key={name}>
            <div className={`${css.textWrapper}`}>
              <p className={`${css.text}`}>{name}:</p>
              <p className={`${css.text}`}>{number}</p>
            </div>

            <button
              className={`${css.button}`}
              type="button"
              id={name}
              onClick={() => {
                deleteContact(name);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
