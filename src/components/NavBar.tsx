import Link from 'next/link'
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
          <Link href="/">
            <Image src={logo} alt="logo" className={styles.logo} width={40} height={40}/>
          </Link>
          <div className={styles.iconBar}>
            <Link href="/">
              <Image src={home} alt="home icon"/>
            </Link>
            <Link href="/movies">
              <Image src={movies} alt="movies icon"/>
            </Link>
            <Link href="/tvSeries">
              <Image src={tv} alt="tv series icon"/>
            </Link>
            <Link href="/bookmark">
              <Image src={bookmark} alt="bookmark icon"/>
            </Link>
          </div>
        </div>
        <Image src={avatar} alt="avatar" width={40} height={40} className={styles.avatar}/>
      </nav>
    </div>
  )
}