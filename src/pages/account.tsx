import Head from "next/head";
import Image from "next/image";
import Login from "@/components/account/Login";
import styles from '@/styles/Account.module.css'
import logo from '../assets/logo.svg'

export default function Account() {
  return(
    <>
      <Head>
        <title>Account</title>
      </Head>
      <main className={styles.container}>
        <Image alt="logo" src={logo} className={styles.logo}/>
        <Login/>
      </main>
    </>
  )
}