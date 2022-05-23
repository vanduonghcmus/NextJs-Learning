import EventItem from "./EventItem";
import PropTypes from "prop-types";

const EventList = (props) => {
  const { items } = props;

  return (
    <ul>
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
