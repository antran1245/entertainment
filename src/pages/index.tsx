import Head from 'next/head'
import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'
import Trending from '@/components/home/Trending'
import styles from '@/styles/Home.module.css'
import { useFetch } from '@/hooks/useFetch'

export default function Home() {
  const { data = [], movies = [], tvSeries = [], trending = [] } = useFetch('/api/show')
  
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="An's Entertainment Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <NavBar/>
        <div className={styles.content}>
          <SearchBar/>
          <Trending trending={trending}/>
        </div>
      </main>
    </>
  )
}
