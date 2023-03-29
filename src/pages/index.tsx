import Head from 'next/head'
import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'
import Trending from '@/components/home/Trending'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { Data } from '@/types/data'

export default function Home() {
  const [data, setData] = useState<Data | []>([])
  const [movies, setMovies] = useState<Data | []>([])
  const [tvSeries, setTvSeries] = useState<Data | []>([])

  useEffect(() => {
    fetch('/api/show')
    .then(resp => resp.json())
    .then(data => {
      setData(data)
      let moviesData = data.filter((item : any) => item.category === 'Movie')
      let tvSeriesData = data.filter((item : any) => item.category === 'TV Series')
      setMovies(moviesData)
      setTvSeries(tvSeriesData)
    })
    .catch(err => console.error(err))
  }, [])
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
          <Trending/>
        </div>
      </main>
    </>
  )
}
