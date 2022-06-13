import { useRouter } from 'next/router';
import EventContent from '../../components/EventDetail/EventContent';
import EventLogistics from '../../components/EventDetail/EventLogistics';
import EventSummary from '../../components/EventDetail/EventSummary';
import { getEventById } from '../../utils/dummyData';

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) return <p>Event not found!</p>;

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </>
  );
}

export default EventDetailPage;
