import { useContext } from 'react';
import { UserContext } from '@/context/userContext';
import { useFetch } from '@/hooks/useFetch'
import Head from "next/head";
import NavBar from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
import Gallery from '@/components/Gallery';
import styles from '@/styles/Content.module.css'

export default function Bookmark() {
  const { data = [], movies = [], tvSeries = [], trending = [] } = useFetch('/api/show')
  const { bookmark } = useContext(UserContext)
  return (
    <>
      <Head>
        <title>Bookmark</title>
        <meta name="description" content="An's Entertainment Website Bookmark Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <NavBar />
        <div className={styles.content}>
          <SearchBar />
          
          <Gallery data={movies} bookmarkString='Bookmarked Movies'/>

          <Gallery data={tvSeries} bookmarkString='Bookmarked TV Series' />
        </div>
      </main>
    </>
  )
}