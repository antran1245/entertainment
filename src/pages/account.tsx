import { useState } from "react";
import Head from "next/head";
import logo from '../assets/logo.svg'
import Image from "next/image";
import Login from "@/components/account/Login";
import Signup from "@/components/account/Signup";
import styles from '@/styles/Account.module.css'

export default function Account() {
  const [switchSetting, setSwitchSetting] = useState<boolean>(true);
  return(
    <>
      <Head>
        <title>{switchSetting? 'Login' : 'Sign Up'} Page</title>
      </Head>
      <main className={styles.accountContainer}>
        <Image alt="logo" src={logo} className={styles.logo}/>
        {switchSetting? <Login setSwitch={setSwitchSetting}/> : <Signup setSwitch={setSwitchSetting}/>}
      </main>
    </>
  )
}