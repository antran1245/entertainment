import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { UserContext } from '@/context/userContext'
import styles from '@/styles/Account.module.css'

interface SignupProps {
  setSwitch: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Signup({ setSwitch } : SignupProps) {
  const [inputs, setInputs] = useState<{ email: string, password: string, repeat: string }>({ email: '', password: '', repeat: '' })
  const [error, setError] = useState<{ email: boolean, password: boolean, repeat: boolean }>({ email: false, password: false, repeat: false })
  const [char, setChar] = useState<{ symbols: boolean, uppercase: boolean, lowercase: boolean, numbers: boolean }>({ symbols: false, uppercase: false, lowercase: false, numbers: false })
  const router = useRouter()
  const { setUser, setIsBookmarkArr } = useContext(UserContext)

  const submitSignUp = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const email = event.currentTarget.emailAddress.value
    const password = event.currentTarget.password.value

    if(!error.email && !error.password && !error.repeat) {
      const body = { email, password }
      fetch('/api/signup', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
        .then(resp => resp.json())
        .then(data => {
          if(data.result) {
            setUser({email:email, id: data.id, bookmarks: {movies: [], tvSeries: []}})
            setIsBookmarkArr([])
            localStorage.setItem('SccfmPhDeV', JSON.stringify(body))
            router.push('/')
          } else {
            alert('Error making the account. ')
          }
        })
        .catch(err => console.log('SignUp Error: ', err))
    }
  }

  const handleInputs = (event: React.ChangeEvent<HTMLFormElement>) => {
    const email = event.currentTarget.emailAddress.value
    const password = event.currentTarget.password.value
    const repeatPassword = event.currentTarget.repeatPassword.value

    setInputs({ email: email, password: password, repeat: repeatPassword })
  }
  const validateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!(/^[\w.+\-]+@gmail\.com$/.test(event.target.value))) {
      setError({ ...error, email: true })
    } else {
      setError({ ...error, email: false })
    }
  }
  const validatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChar({ ...char, uppercase: /[A-Z]{1,}/.test(event.target.value), symbols: /[!@#$ %^&*]{1,}/.test(event.target.value), lowercase: /[a-z]{1,}/.test(event.target.value), numbers: /[0-9]{1,}/.test(event.target.value) })
    setError({ ...error, password: !(/[A-Z]{1,}/.test(event.target.value) && /[!@#$ %^&*]{1,}/.test(event.target.value) && /[a-z]{1,}/.test(event.target.value) && /[0-9]{1,}/.test(event.target.value)) })
  }
  const validateRepeatPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError({ ...error, repeat: !(event.target.value === inputs.password)})
  }
  const onChangeRepeatPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(inputs.password === event.target.value) setError({ ...error, repeat: false})
  }
  
  return(
    <form className={styles.formBox} onSubmit={submitSignUp} onBlur={handleInputs}>
      <h1>Sign Up</h1>

      <input
        type="email"
        placeholder='example1234@gmail.com'
        id='emailAddress'
        required
        className={`${error.email && inputs.email !== "" ?  styles.error : (inputs.email !== ""? styles.correctInput : '')}`} 
        onBlur={validateEmail}
        autoComplete='off'/>

      <input
        type="password"
        placeholder='Password'
        id='password'
        required 
        className={`${error.password ? styles.error : ''} ${char.symbols && char.lowercase && char.uppercase && char.numbers? styles.correctInput : ''}`}
        onBlur={validatePassword}/>

      <label>Password required at least one</label>
      <div className={styles.requirementGrid}>
        <p className={`${char.symbols? styles.greenLight : styles.redLight}`}><span>&#183;</span>symbol - !@#$%^&*</p>
        <p className={`${char.uppercase? styles.greenLight : styles.redLight}`}><span>&#183;</span>uppercase</p>
        <p className={`${char.lowercase? styles.greenLight : styles.redLight}`}><span>&#183;</span>lowercase</p>
        <p className={`${char.numbers? styles.greenLight : styles.redLight}`}><span>&#183;</span>number</p>
      </div>

      <input
        type="password"
        placeholder='Repeat password'
        name='repeatPassword' 
        required
        className={`${error.repeat ? styles.error : ''} ${inputs.password === inputs.repeat && inputs.repeat !== ''? styles.correctInput : ''}`} 
        onBlur={validateRepeatPassword} onChange={onChangeRepeatPassword}/>
      <button type='submit'>Create an account</button>
      <p>Already have an account? &nbsp;<span onClick={() => setSwitch(true)}>Login</span></p>
    </form>
  )
}