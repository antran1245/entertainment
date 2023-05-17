import { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/context/userContext'
import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/assets/logo.svg'
import home from '/public/assets/icon-nav-home.svg'
import movies from '/public/assets/icon-nav-movies.svg'
import tv from '/public/assets/icon-nav-tv-series.svg'
import bookmark from '/public/assets/icon-nav-bookmark.svg'
import avatar from '/public/assets/image-avatar.png'
import styles from '@/styles/Navbar.module.css'
import accountCircle from '/public/accountCircle.svg'

export default function NavBar() {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const { user } = useContext(UserContext)

  useEffect(() => {
    setIsLogin(user.email !== null)
  }, [user])
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
            <Link href={isLogin? "/bookmark" : "/account"}>
              <Image src={bookmark} alt="bookmark icon"/>
            </Link>
          </div>
        </div>
        <Link href="/account">
          <Image src={isLogin? avatar : accountCircle} alt="avatar" width={40} height={40} className={styles.avatar}/>
        </Link>
      </nav>
    </div>
  )
}