import { useFetch } from '@/hooks/useFetch'
import Head from "next/head";
import NavBar from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
import Gallery from '@/components/Gallery';
import styles from '@/styles/Movies.module.css'

export default function Movies() {
  const { data = [], movies = [], tvSeries = [], trending = [] } = useFetch('/api/show')
  return(
    <>
      <Head>
        <title>Movies</title>
        <meta name="description" content="An's Entertainment Website Movies Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <NavBar/>
        <div className={styles.content}>
          <SearchBar/>
          <Gallery data={movies} />
        </div>
      </main>
    </>
  )
}