import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Account.module.css'
import { UserContext } from '@/context/userContext'

interface LoginProps {
  setSwitch: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Login({ setSwitch } : LoginProps) {
  const [errors, setError] = useState<boolean>(false)
  const {setUser, setBookmark} = useContext(UserContext)
  console.log(process.env.DATABASE_URL)
  let router = useRouter()

  const submitLogin = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const password = event.currentTarget.password.value
    const email = event.currentTarget.emailAddress.value
    const body = {email, password}
    fetch('/api/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(data => {
        setError(!data.result)
        if(data.result) {
          setUser({email:email, id: data.id})
          setBookmark([])
          router.push('/')
        }
        console.log('Login: ', data)
      })
      .catch(err => console.log('Login Error: ', err))
  }
  return(
    <form className={styles.formBox} onSubmit={submitLogin}>
      <h1>Login</h1>
      {errors? <label className={styles.errorLabel}>Email or Password is invalid!</label> : ""}
      <input placeholder="Email address" type="text" id='emailAddress' autoComplete='off'/>
      {errors ? <label className={styles.errorLabel}>Email or Password is invalid!</label> : ""}
      <input placeholder="Password" type="password" id='password'/>
      <button type="submit">Login to your account</button>
      <p>Don't have an account? &nbsp;<span onClick={() => setSwitch(false)}>Sign Up</span></p>
    </form>
  )
}