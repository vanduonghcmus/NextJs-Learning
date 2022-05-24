import EventItem from "./EventItem";
import PropTypes from "prop-types";
import classes from './EventList.module.css'

const EventList = (props) => {
  const { items } = props;

  return (
    <ul className={classes.list} >
      {items.map((item) => (
        <EventItem
          key={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          location={item.location}
          id={item.id}
        />
      ))}
    </ul>
  );
};

EventList.propTypes = {
  items: PropTypes.object.isRequired,
};

export default EventList;
