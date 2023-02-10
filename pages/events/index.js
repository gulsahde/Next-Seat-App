import { getAllEvents } from '../../helpers/api-utils';
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

function AllEventsPage(props) {

    const router = useRouter();
    const { allEvents } = props;

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath);
    }

    return (
        <Fragment>
            <Head>
                <title>All Events</title>
                <meta
                    name="description"
                    content="Tickets - Search all tickets, see seat locations." />
            </Head>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={allEvents} />
        </Fragment>
    )
}

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            allEvents: events,
        },
        revalidate: 60
    }

}
export default AllEventsPage;