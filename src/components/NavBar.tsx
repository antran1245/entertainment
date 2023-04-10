import Image from 'next/image'
import logo from '/public/assets/logo.svg'
import home from '/public/assets/icon-nav-home.svg'
import movies from '/public/assets/icon-nav-movies.svg'
import tv from '/public/assets/icon-nav-tv-series.svg'
import bookmark from '/public/assets/icon-nav-bookmark.svg'
import avatar from '/public/assets/image-avatar.png'
import styles from '@/styles/Navbar.module.css'

export default function NavBar() {
  return(
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div>
          <Image src={logo} alt="logo" className={styles.logo}/>
          <div className={styles.iconBar}>
            <a href="/">
              <Image src={home} alt="home icon"/>
            </a>
            <a href="/movies">
              <Image src={movies} alt="movies icon"/>
            </a>
            <Image src={tv} alt="tv series icon"/>
            <Image src={bookmark} alt="bookmark icon"/>
          </div>
        </div>
        <Image src={avatar} alt="avatar" width={40} height={40} className={styles.avatar}/>
      </nav>
    </div>
  )
}