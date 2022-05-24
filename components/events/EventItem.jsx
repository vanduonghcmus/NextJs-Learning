import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import classes from './EventItem.module.css';

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('vi-VN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formatAddress = location.replace(', ', '\n');
  const exploreLink = `/event/${id}`;

  return (
    <li className={classes.item}>
      <div>
        <Image src={'/' + image} alt={title} width="100%" height="100%" />
      </div>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formatAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

EventItem.propsType = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default EventItem;
