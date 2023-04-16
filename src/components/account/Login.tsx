import styles from '@/styles/Account.module.css'

interface LoginProps {
  setSwitch: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Login({ setSwitch } : LoginProps) {
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
      .then(data => console.log('Login: ', data))
      .catch(err => console.log('Login Error: ', err))
  }
  return(
    <form className={styles.formBox} onSubmit={submitLogin}>
      <h1>Login</h1>
      <input placeholder="Email address" type="text" id='emailAddress'/>
      <input placeholder="Password" type="password" id='password'/>
      <button type="submit">Login to your account</button>
      <p>Don't have an account? &nbsp;<span onClick={() => setSwitch(false)}>Sign Up</span></p>
    </form>
  )
}