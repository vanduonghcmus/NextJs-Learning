import Button from '../ui/Button';
import PropTypes from 'prop-types';
import classes from './ResultTitle.module.css';

const ResultTitle = (props) => {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.section}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="./events">Show all Events</Button>
    </section>
  );
};

ResultTitle.propTypes = {
  date: PropTypes.any.isRequired,
};

export default ResultTitle;
