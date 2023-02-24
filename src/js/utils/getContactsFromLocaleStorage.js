export function getContactsFromLocaleStorage() {
  if (window.localStorage.contacts) {
    return JSON.parse(window.localStorage.getItem('contacts'));
  }
}
