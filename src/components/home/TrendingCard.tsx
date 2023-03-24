import bookmarkEmpty from '/public/assets/icon-bookmark-empty.svg'
import bookmarkFull from '/public/assets/icon-bookmark-full.svg'
import movie from '/public/assets/icon-category-movie.svg'
import tv from '/public/assets/icon-category-tv.svg'
import styles from '@/styles/Trending.module.css'
import Image from 'next/image'

export default function TrendingCard() {
  return (
    <div className={styles.card}>
      <Image src={'/assets/thumbnails/beyond-earth/trending/large.jpg'} alt="beyond earth" width={470} height={230}/>
      <div className={styles.cardBody}>
        <div className={styles.bookmarkContainer}>
          <Image src={bookmarkEmpty} alt="bookmark" width={12} height={14}/>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            2019 &#x2022; <Image src={movie} alt="movie icon"/> Movie &#x2022; PG
          </p>
          <p className={styles.title}>Beyond Earth</p>
        </div>
      </div>
    </div>
  )
}