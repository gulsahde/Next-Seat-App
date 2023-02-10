import EventItem from "./event-item";
import styles from "./event-list.module.css"

function EventList(props){
    const {items} = props;
    return <ul className={styles.list}>
        {items.map((event) => (
        <EventItem 
            key={event.id} //jsx-eslint rule.
            id={event.id} 
            title={event.title} 
            location={event.location} 
            date={event.date} 
            time={event.time}
            image={event.image}
        />
        ))}
    </ul>
}

export default EventList;