import Link from 'next/link';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = (props) => {
  const { link, children } = props;
  if (link) {
    return (
      <Link href={link} passHref>
        <span className={classes.btn}>{children}</span>
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  link: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
