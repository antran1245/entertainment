import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
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
        </div>
      </main>
    </>
  )
}
