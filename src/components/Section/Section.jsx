import PropTypes from 'prop-types';
import css from 'components/Section/Section.module.css';

export function Section({ title, children }) {
  return (
    <section className={`${css.section}`}>
      {title && <h2 className={`${css.title}`}>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
