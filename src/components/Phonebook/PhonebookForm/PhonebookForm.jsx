import { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/Phonebook/PhonebookForm/PhonebookForm.module.css';

export class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onFormChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const contact = { id: name, name: name, number: number };

    this.props.addContact(contact);
    this.clearFormInputs();
  };

  clearFormInputs() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    const { name, number } = this.state;
    return (
      <form className={`${css.form}`} onSubmit={this.onFormSubmit}>
        <label className={`${css.label}`}>
          Name
          <input
            className={`${css.input}`}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.onFormChange}
          />
        </label>
        <label className={`${css.label}`}>
          Number
          <input
            className={`${css.input}`}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.onFormChange}
          />
        </label>
        <button className={`${css.button}`} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

PhonebookForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
