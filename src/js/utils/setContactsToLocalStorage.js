export function setContactsToLocaleStorage(contacts) {
  window.localStorage.setItem('contacts', JSON.stringify(contacts));
  return;
}
