import bookmarkEmpty from '/public/assets/icon-bookmark-empty.svg'
import bookmarkFull from '/public/assets/icon-bookmark-full.svg'
import movie from '/public/assets/icon-category-movie.svg'
import tv from '/public/assets/icon-category-tv.svg'
import styles from '@/styles/Trending.module.css'
import Image from 'next/image'
import { SingleEntry } from '@/types/data'

interface TrendingCardProp {
  item : SingleEntry
}

export default function TrendingCard({ item } : TrendingCardProp) {
  return (
    <div className={styles.card}>
      <Image src={`${(item.thumbnail.trending?.large)?.slice(1)}`} alt={`${item.title}`} width={470} height={230}/>
      <div className={styles.cardBody}>
        <div className={styles.bookmarkContainer}>
          <Image src={bookmarkEmpty} alt="bookmark" width={12} height={14}/>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            {`${item.year}`} &#x2022; <Image src={item.category === 'Movie' ? movie : tv} alt={`${item.category === 'Movie' ? 'movie' : 'tv'} icon`} /> {`${item.category}`} &#x2022; {`${item.rating}`} 
          </p>
          <p className={styles.title}>{`${item.title}`} </p>
        </div>
      </div>
    </div>
  )
}