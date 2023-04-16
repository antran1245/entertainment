import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import logo from '/public/assets/logo.svg'
import Login from "@/components/account/Login";
import Signup from "@/components/account/Signup";
import styles from '@/styles/Account.module.css'

export default function Account() {
  const [switchSetting, setSwitchSetting] = useState<boolean>(true);
  return(
    <>
      <Head>
        <title>{switchSetting? 'Login' : 'Sign Up'} Page</title>
        <meta name="description" content="An's Entertainment Website Login/SignUp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.accountContainer}>
        <Image alt="logo" src={logo} className={styles.logo}/>
        {switchSetting? <Login setSwitch={setSwitchSetting}/> : <Signup setSwitch={setSwitchSetting}/>}
      </main>
    </>
  )
}