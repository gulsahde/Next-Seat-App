import LocationIcon from '../icons/location-icon';
import CalendarIcon from '../icons/calendar-icon';
import CartItem from './cart-item';
import TimeIcon from '../icons/time-icon';
import styles from './event-cart.module.css';

import Image from 'next/image'

function EventCart(props) {
  const { date, time, location, image, imageAlt } = props;

  const readableDateFormat = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  // TIME FORMAT CONVERTER - BEGINNING
  const [hourString, minute] = time.split(":");
  const hour = +hourString % 24;
  const readableTimeFormat = (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
  // TIME FORMAT CONVERTER - END
  
  const locationText = location.replace(', ', '\n');

  return (
    <section className={styles.carts}>
      <div className={styles.image}>
        <Image
          src={`/${image}`}
          alt={imageAlt}
          width={400}
          height={400}
        />
      </div>
      <ul className={styles.list}>
        <CartItem icon={CalendarIcon}>
          <time>{readableDateFormat}</time>
        </CartItem>
        <CartItem icon={TimeIcon}>
          <time>{readableTimeFormat}</time>
        </CartItem>
        <CartItem icon={LocationIcon}>
          <address>{locationText}</address>
        </CartItem>
      </ul>
    </section>
  );
}

export default EventCart;
