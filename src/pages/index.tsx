import Head from 'next/head'
import Account from './account'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="An's Entertainment Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main data-theme-mode="dark">
        <Account/>
      </main>
    </>
  )
}
