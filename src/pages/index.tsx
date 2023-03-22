import NavBar from '@/components/NavBar'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="An's Entertainment Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar/>
      </main>
    </>
  )
}
