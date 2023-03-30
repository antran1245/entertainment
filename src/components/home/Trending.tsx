import TrendingCard from './TrendingCard'
import styles from '@/styles/Trending.module.css'
import { Data, SingleEntry } from '@/types/data'
import { useRef, useState } from 'react'

interface TrendingProp {
  trending: Data
}

export default function Trending({ trending }: TrendingProp) {
  const ref = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState<Boolean>(false)
  const [clientX, setClientX] = useState<number>(0)
  const [scrollX, setScrollX] = useState<number>(0)

  const mouseDown = (e: React.MouseEvent) => {
    setIsScrolling(true)
    setClientX(e.clientX)
  }
  const scrollingTrend = (e : React.MouseEvent) => {
    if(isScrolling && ref.current) {
      ref.current.scrollLeft = scrollX + e.clientX - clientX
      setScrollX(scrollX+e.clientX-clientX)
      setClientX(e.clientX)
    }
  }
  return(
    <section className={styles.container}>
      <h1>Trending</h1>
      <div ref={ref} onMouseDown={(e) => mouseDown(e)} onMouseUp={() => setIsScrolling(false)} onMouseMove={(e) => scrollingTrend(e)}>
        {trending.map((item : SingleEntry, index : any) => {
          return <TrendingCard key={index} item={item}/>
        })}
      </div>
    </section>
  )
}