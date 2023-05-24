import { useContext, useState } from "react";
import { UserContext } from "@/context/userContext";
import Head from "next/head";
import Image from "next/image";
import logo from '/public/assets/logo.svg'
import Login from "@/components/account/Login";
import Signup from "@/components/account/Signup";
import styles from '@/styles/Account.module.css'
import Link from "next/link";
import Signout from "@/components/account/Signout";

export default function Account() {
  const [switchSetting, setSwitchSetting] = useState<boolean>(true);
  const { user } = useContext(UserContext)
  return(
    <>
      <Head>
        <title>Account Page</title>
        <meta name="description" content="An's Entertainment Website Login/SignUp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.accountContainer}>
        <Link href="/">
          <Image alt="logo" src={logo} className={styles.logo}/>
        </Link>
        {user.email? <Signout setSwitch={setSwitchSetting}/> :
        switchSetting? <Login setSwitch={setSwitchSetting}/> : <Signup setSwitch={setSwitchSetting}/>}
      </main>
    </>
  )
}