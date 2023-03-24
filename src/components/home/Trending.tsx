import TrendingCard from './TrendingCard'
import styles from '@/styles/Trending.module.css'

export default function Trending() {
  return(
    <section className={styles.container}>
      <h1>Trending</h1>
      <div>
        <TrendingCard/>
      </div>
    </section>
  )
}