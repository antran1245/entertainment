import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '@/context/userContext'
import { useFetch } from '@/hooks/useFetch'
import styles from '@/styles/Account.module.css'

interface LoginProps {
  setSwitch: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Login({ setSwitch } : LoginProps) {
  const [errors, setError] = useState<boolean>(false)
  const {setUser, setIsBookmarkArr} = useContext(UserContext)
  const { data = [] } = useFetch('/api/show')
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
      .then(dataResp => {
        setError(!dataResp.result)
        if(dataResp.result) {
          let currMovies = []
          let currTVSeries = []
          let bookmarksArr = dataResp.bookmarks.map((item : any) => item.showId)
            for(let i = 0; i < data.length; i++) {
              if(bookmarksArr.includes(data[i]["id"])) {
                if(data[i]["category"] === "TV Series") {
                  currTVSeries.push(data[i])
                } else {
                  currMovies.push(data[i])
                }
              }
            }
          setUser({email:email, id: dataResp.id, bookmarks: {movies: currMovies, tvSeries: currTVSeries}})
          setIsBookmarkArr([...bookmarksArr])
          localStorage.setItem('user', JSON.stringify(body))
          router.push('/')
        }
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