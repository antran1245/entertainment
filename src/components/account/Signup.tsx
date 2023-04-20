import styles from '@/styles/Account.module.css'
import { useState } from 'react'

interface SignupProps {
  setSwitch: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Signup({ setSwitch } : SignupProps) {
  const [error, setError] = useState<{ email: boolean, password: boolean, repeat: boolean }>({ email: false, password: false, repeat: false })
  const [char, setChar] = useState<{ symbols: boolean, uppercase: boolean, lowercase: boolean, numbers: boolean }>({ symbols: false, uppercase: false, lowercase: false, numbers: false })
  
  const submitSignUp = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const email = event.currentTarget.emailAddress.value
    const password = event.currentTarget.password.value
    const repeatPassword = event.currentTarget.repeatPassword.value

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

  const validatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChar({ ...char, uppercase: /[A-Z]{ 1,}/.test(event.target.value), symbols: /[!@#$ %^&*]{ 1,}/.test(event.target.value), lowercase: /[a-z]{ 1,}/.test(event.target.value), numbers: /[0-9]{ 1,}/.test(event.target.value) })
  }

  const validateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!(/^[\w.+\-]+@gmail\.com$/.test(event.target.value))) {
      setError({ ...error, email: true })
    } else {
      setError({ ...error, email: false })
    }
  }
  return(
    <form className={styles.formBox} onSubmit={submitSignUp}>
      <h1>Sign Up</h1>
      <input type="email" placeholder='example1234@gmail.com' id='emailAddress' required className={error.email ? styles.error : ''} onBlur={validateEmail} autoComplete='off'/>
      <input type="password" placeholder='Password' id='password' required className={error.password ? styles.error : ''} />
      <label>Password required at least one</label>
      <div className={styles.requirementGrid}>
        <p className={`${char.symbols? styles.greenLight : styles.redLight}`}><span>&#183;</span>symbol - !@#$%^&*</p>
        <p className={`${char.uppercase? styles.greenLight : styles.redLight}`}><span>&#183;</span>uppercase</p>
        <p className={`${char.lowercase? styles.greenLight : styles.redLight}`}><span>&#183;</span>lowercase</p>
        <p className={`${char.numbers? styles.greenLight : styles.redLight}`}><span>&#183;</span>number</p>
      </div>
      <input type="password" placeholder='Repeat password' name='repeatPassword' required className={error.repeat ? styles.error : ''} />
      <button type='submit'>Create an account</button>
      <p>Already have an account? &nbsp;<span onClick={() => setSwitch(true)}>Login</span></p>
    </form>
  )
}