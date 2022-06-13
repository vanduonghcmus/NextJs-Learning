import Link from 'next/link';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = (props) => {
  const { link, children } = props;
  return (
    <Link href={link} passHref>
      <span className={classes.btn}>{children}</span>
    </Link>
  );
};

Button.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Button;
