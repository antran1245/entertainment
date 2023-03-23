import Image from 'next/image'
import logo from '../assets/logo.svg'
import home from '../assets/icon-nav-home.svg'
import movies from '../assets/icon-nav-movies.svg'
import tv from '../assets/icon-nav-tv-series.svg'
import bookmark from '../assets/icon-nav-bookmark.svg'
import avatar from '../assets/image-avatar.png'
import styles from '@/styles/Navbar.module.css'

export default function NavBar() {
  return(
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div>
          <Image src={logo} alt="logo" className={styles.logo}/>
          <div className={styles.iconBar}>
            <Image src={home} alt="home icon"/>
            <Image src={movies} alt="movies icon"/>
            <Image src={tv} alt="tv series icon"/>
            <Image src={bookmark} alt="bookmark icon"/>
          </div>
        </div>
        <Image src={avatar} alt="avatar" width={40} height={40} className={styles.avatar}/>
      </nav>
    </div>
  )
}