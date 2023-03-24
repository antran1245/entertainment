import bookmarkEmpty from '/public/assets/icon-bookmark-empty.svg'
import bookmarkFull from '/public/assets/icon-bookmark-full.svg'
import movie from '/public/assets/icon-category-movie.svg'
import tv from '/public/assets/icon-category-tv.svg'
import styles from '@/styles/Trending.module.css'
import Image from 'next/image'

export default function TrendingCard() {
  return (
    <div>
      <Image src={'/assets/thumbnails/beyond-earth/trending/small.jpg'} alt="beyond earth" width={470} height={230}/>
    </div>
  )
}