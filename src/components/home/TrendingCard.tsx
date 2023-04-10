import bookmarkEmpty from '/public/assets/icon-bookmark-empty.svg'
import bookmarkFull from '/public/assets/icon-bookmark-full.svg'
import movie from '/public/assets/icon-category-movie.svg'
import tv from '/public/assets/icon-category-tv.svg'
import play from '/public/assets/icon-play.svg'
import styles from '@/styles/Trending.module.css'
import Image from 'next/image'
import { SingleEntry } from '@/types/data'
import { useState } from 'react'

interface TrendingCardProp {
  item : SingleEntry
}

export default function TrendingCard({ item } : TrendingCardProp) {
  const [overlay, setOverlay] = useState<boolean>(false)
  return (
    <div className={styles.card}>
      <Image src={`${(item.thumbnail.trending?.large)?.slice(1)}`} alt={`${item.title}`} width={470} height={230}/>
      <div className={styles.cardBody} onMouseEnter={() => setOverlay(true)}>
        <div className={styles.playButton} style={{ display: overlay ? 'flex' : 'none' }} onMouseLeave={() => setOverlay(false)}>
          <div>
            <Image src={play} alt='playButton'/>
            <p>Play</p>
          </div>
        </div>
        <div className={styles.bookmarkContainer} onMouseLeave={() => setOverlay(true)}>
          <Image src={bookmarkEmpty} alt="bookmark" width={12} height={14}/>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <p>{`${item.year}`}</p>
            <span>&#x2022;</span>
            <Image src={item.category === 'Movie' ? movie : tv} alt={`${item.category === 'Movie' ? 'movie' : 'tv'} icon`} />
            <p>{`${item.category}`}</p>
            <span>&#x2022;</span>
            <p>{`${item.rating}`}</p>
          </div>
          <p className={styles.title}>{`${item.title}`} </p>
        </div>
      </div>
    </div>
  )
}