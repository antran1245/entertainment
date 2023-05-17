import { useContext, useState } from 'react'
import { UserContext } from "@/context/userContext"
import { SingleEntry } from "@/types/data"
import { useRouter } from 'next/router'
import bookmarkEmpty from '/public/assets/icon-bookmark-empty.svg'
import bookmarkFull from '/public/assets/icon-bookmark-full.svg'
import movie from '/public/assets/icon-category-movie.svg'
import tv from '/public/assets/icon-category-tv.svg'
import play from '/public/assets/icon-play.svg'
import styles from '@/styles/Trending.module.css'
import Image from 'next/image'

interface TrendingCardProp {
  item : SingleEntry;
  isBookmark: boolean;
}

export default function TrendingCard({ item, isBookmark } : TrendingCardProp) {
  const [overlay, setOverlay] = useState<boolean>(false)
  const { user } = useContext(UserContext)
  const router = useRouter()
  
  const bookmarking = ( entry : SingleEntry ) => {
    if(user.email) {
      const body = {id: user.id, showId: entry.id }
      let bookmarkArr = [...user.bookmarks.movies.map((item:any) => item.id), user.bookmarks.tvSeries.map((item:any) => item.id)]
      if(!bookmarkArr.includes(entry.id)) {
        fetch('/api/addBookmark', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
      }
    } else {
      router.push('/account')
    }
  }
  
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
        <div className={styles.bookmarkContainer} onMouseLeave={() => setOverlay(true)} onClick={() => bookmarking(item)}>
          <Image src={isBookmark? bookmarkFull : bookmarkEmpty} alt="bookmark" width={12} height={14}/>
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