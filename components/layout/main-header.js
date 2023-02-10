import Link from 'next/link'
import styles from './main-header.module.css'

function MainHeader(){
    return(
        <header className={styles.header}>
            {/* LOGO */}
            <div className={styles.logo}> 
                <Link href="/">Next Seat</Link>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <Link href="/events">Browse Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;