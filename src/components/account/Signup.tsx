import styles from '@/styles/Account.module.css'

interface SignupProps {
  setSwitch: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Signup({ setSwitch } : SignupProps) {
  const submitSignUp = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const email = event.currentTarget.emailAddress.value
    const password = event.currentTarget.password.value
    const repeatPassword = event.currentTarget.repeatPassword.value
    console.log(repeatPassword)
    if(password === repeatPassword) {
      const body = { email, password }
      fetch('/api/signup', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
        .then(resp => resp.json())
        .then(data => console.log('SignUp: ', data))
        .catch(err => console.log('SignUp Error: ', err))
    }
  }
  return(
    <form className={styles.formBox} onSubmit={submitSignUp}>
      <h1>Sign Up</h1>
      <input type="text" placeholder='Email address' id='emailAddress'/>
      <input type="text" placeholder='Password' id='password'/>
      <input type="text" placeholder='Repeat password' name='repeatPassword'/>
      <button type='submit'>Create an account</button>
      <p>Already have an account? &nbsp;<span onClick={() => setSwitch(true)}>Login</span></p>
    </form>
  )
}