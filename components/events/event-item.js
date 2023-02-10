import styles from './event-item.module.css'
import Button from '../ui/button';
import CalendarIcon from '../icons/calendar-icon';
import LocationIcon from '../icons/location-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import TimeIcon from '../icons/time-icon';
import Image from 'next/image'

function EventItem(props) {

    const { id, title, location, date, time, image } = props;
    const readableDateFormat = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }); // Tue May 12 2020
    //const readableTimeFormat = new Date(time).toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" }); //11:50 PM

    // TIME FORMAT CONVERTER - BEGINNING
    const [hourString, minute] = time.split(":");
    const hour = +hourString % 24;
    const readableTimeFormat = (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
    // TIME FORMAT CONVERTER - END

    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (
        <li className={styles.item}>
            <Image src={'/' + image} alt={title} width={300} height={270} />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <CalendarIcon />
                        <time>{readableDateFormat}</time>
                    </div>
                    <div className={styles.date}>
                        <TimeIcon />
                        <time>{readableTimeFormat}</time>
                    </div>
                    <div className={styles.address}>
                        <LocationIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={exploreLink}>
                        <span>Find Tickets</span>
                        <span className={styles.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>

        </li>
    )
}

export default EventItem;