import PropTypes from 'prop-types';
import css from 'components/Phonebook/Filter/Filter.module.css';

export function Filter({ onFilterChange, filterValue }) {
  return (
    <label className={`${css.label}`}>
      Find contacts by name:
      <input
        className={`${css.input}`}
        type="text"
        placeholder="Start typing"
        onChange={onFilterChange}
        value={filterValue}
      />
    </label>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string,
};
