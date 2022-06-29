import { getAllEvents } from '../../utils/dummyData';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { useRouter } from 'next/router';

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events}></EventList>
    </>
  );
}

export default AllEventsPage;
