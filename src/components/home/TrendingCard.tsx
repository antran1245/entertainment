import bookmarkEmpty from '@/assets/icon-bookmark-empty.svg'
import bookmarkFull from '@/assets/icon-bookmark-full.svg'
import movie from '@/assets/icon-category-movie.svg'
import tv from '@/assets/icon-category-tv.svg'
import styles from '@/styles/Trending.module.css'
import Image from 'next/image'

export default function TrendingCard() {
  return (
    <div>
      <Image src={'/assets/thumbnails/beyond-earth/trending/small.jpg'} alt="beyond earth" width={470} height={230}/>
    </div>
  )
}