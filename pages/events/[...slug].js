import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../utils/dummyData';
import EventList from '../../components/events/EventList';
import ResultTitle from '../../components/events/ResultTitle';
import Button from '../../components/ui/Button';

function FilteredEvents() {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = Number(filteredYear);
  const numMonth = Number(filteredMonth);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invaid filter. Please adjust your values</p>;
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <p>No events Found for the chosen filter!</p>
        <div className="center">
          <Button link="./events">Show all Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export default FilteredEvents;
