import { useContext, useRef, useState } from 'react'
import { UserContext } from '@/context/userContext'
import { Data, SingleEntry } from '@/types/data'
import TrendingCard from './TrendingCard'
import styles from '@/styles/Trending.module.css'

interface TrendingProp {
  trending: Data
}

export default function Trending({ trending }: TrendingProp) {
  const ref = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState<Boolean>(false)
  const [clientX, setClientX] = useState<number>(0)
  const [scrollX, setScrollX] = useState<number>(0)
  const { isBookmark } = useContext(UserContext)

  const mouseDown = (e: React.MouseEvent) => {
    setIsScrolling(true)
    setClientX(e.clientX)
  }
  const scrollingTrend = (e : React.MouseEvent) => {
    if(isScrolling && ref.current) {
      ref.current.scrollLeft = scrollX + e.clientX - clientX
      if (scrollX + e.clientX - clientX > window.innerWidth) {
        setScrollX(window.innerWidth)
      } else if (scrollX + e.clientX - clientX < 0) {
        setScrollX(0)
      } else {
        setScrollX(scrollX+e.clientX-clientX)
      }
      setClientX(e.clientX)
    }
  }
  return(
    <section className={styles.container}>
      <h1>Trending</h1>
      <div ref={ref} onMouseDown={(e) => mouseDown(e)} onMouseUp={() => setIsScrolling(false)} onMouseMove={(e) => scrollingTrend(e)}>
        {trending.map((item : SingleEntry, index : any) => {
          return <TrendingCard key={index} item={item} isBookmark={isBookmark.includes(item.id)}/>
        })}
      </div>
    </section>
  )
}