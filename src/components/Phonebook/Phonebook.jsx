import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { PhonebookForm } from 'components/Phonebook/PhonebookForm/PhonebookForm';
import { ContactsList } from 'components/Phonebook/ContactsList/ContactsList';
import { Filter } from 'components/Phonebook/Filter/Filter';

export class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const itsAlreadyAdded = this.state.contacts.find(
      el => el.name === contact.name
    );

    if (itsAlreadyAdded) {
      window.alert(`${contact.name} is already in contacts.`);
      return;
    } else {
      this.setState(({ contacts }) => {
        return { contacts: [...contacts, contact] };
      });
    }
  };

  deleteContact = nameForDelete => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(el => el.name !== nameForDelete),
      };
    });
  };

  onFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  filterContacts() {
    return this.state.contacts.filter(el => {
      return el.name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
  }

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <PhonebookForm addContact={this.addContact} />
        </Section>
        {contacts.length > 0 ? (
          <Section title="Contacts">
            <Filter filterValue={filter} onFilterChange={this.onFilterChange} />
            <ContactsList
              contacts={this.filterContacts()}
              deleteContact={this.deleteContact}
            />
          </Section>
        ) : (
          'Please, add first contact!'
        )}
      </>
    );
  }
}
