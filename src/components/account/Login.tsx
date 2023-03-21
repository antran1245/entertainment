import styles from '@/styles/Account.module.css'

interface LoginProps {
  setSwitch: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Login({ setSwitch } : LoginProps) {
  return(
    <form className={styles.formBox}>
      <h1>Login</h1>
      <input placeholder="Email address" type="text"/>
      <input placeholder="Password" type="text" />
      <button type="button">Login to your account</button>
      <p>Don't have an account? &nbsp;<span onClick={() => setSwitch(false)}>Sign Up</span></p>
    </form>
  )
}