import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("vi-VN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatAddress = location.replace(", ", "\n");
  const exploreLink = `/event/${id}`;

  return (
    <li>
      <Image src={"/" + image} alt={title} width="30px" height="30px" />
      <div>
        <div>
          <h2>Title</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formatAddress}</address>
          </div>
        </div>
        <div>
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
