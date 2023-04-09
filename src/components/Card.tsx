import { SingleEntry } from "@/types/data"
import Image from "next/image"
import bookmarkEmpty from '/public/assets/icon-bookmark-empty.svg'
import bookmarkFull from '/public/assets/icon-bookmark-full.svg'
import movie from '/public/assets/icon-category-movie.svg'
import tv from '/public/assets/icon-category-tv.svg'
import play from '/public/assets/icon-play.svg'
import styles from '@/styles/Gallery.module.css'
import { useState } from 'react'

interface CardProp {
  item : SingleEntry
}

export default function Card({ item } : CardProp) {
  const [overlay, setOverlay] = useState<boolean>(false)

  return(
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <Image src={`${item.thumbnail.regular.small.slice(1)}`} alt={`${item.title}`} width={280} height={174} onMouseEnter={() => setOverlay(true)} />
        <span className={styles.bookmark}><Image src={bookmarkEmpty} alt="bookmark" /></span>
        <div className={styles.playButton} style={{ display: overlay ? 'flex' : 'none' }} onMouseLeave={() => setOverlay(false)}>
          <div>
            <Image src={play} alt='playButton' />
            <p>Play</p>
          </div>
        </div>
      </div>
      <div className={styles.cardInfo}>
        <p>{`${item.year}`}</p>
        <span>&#x2022;</span>
        <Image src={item.category === 'Movie' ? movie : tv} alt={`${item.category === 'Movie' ? 'movie' : 'tv'} icon`} />
        <p>{`${item.category}`}</p>
        <span>&#x2022;</span>
        <p>{`${item.rating}`}</p>
      </div>
      <p className={styles.title}>{`${item.title}`} </p>
    </div>
  )
}