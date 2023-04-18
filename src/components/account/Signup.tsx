import styles from '@/styles/Account.module.css'
import { useState } from 'react'

interface SignupProps {
  setSwitch: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Signup({ setSwitch } : SignupProps) {
  const [error, setError] = useState<{ email: boolean, password: boolean, repeat: boolean }>({ email: false, password: false, repeat: false })

  const submitSignUp = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const email = event.currentTarget.emailAddress.value
    const password = event.currentTarget.password.value
    const repeatPassword = event.currentTarget.repeatPassword.value

    if (!(/^[\w.+\-]+@gmail\.com$/.test(email))) {
      setError({...error, email: true})
    }

    if(password === repeatPassword && password.trim() !== "") {
      const body = { email, password }
      fetch('/api/signup', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
        .then(resp => resp.json())
        .then(data => {
          console.log('SignUp: ', data)
          if(!data.result) {
            if(data.reason) {
              alert(data.reason)
            } else {
              alert('Error making the account.')
            }
          }
        })
        .catch(err => console.log('SignUp Error: ', err))
    }
  }
  return(
    <form className={styles.formBox} onSubmit={submitSignUp}>
      <h1>Sign Up</h1>
      <input type="email" placeholder='example1234@gmail.com' id='emailAddress' required className={error.email ? styles.error : ''} pattern='^[\w.+\-]+@gmail\.com$' autoComplete='off'/>
      <input type="password" placeholder='Password' id='password' required className={error.password ? styles.error : ''} />
      <input type="password" placeholder='Repeat password' name='repeatPassword' required className={error.repeat ? styles.error : ''} />
      <button type='submit'>Create an account</button>
      <p>Already have an account? &nbsp;<span onClick={() => setSwitch(true)}>Login</span></p>
    </form>
  )
}