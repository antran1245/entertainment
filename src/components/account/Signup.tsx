import styles from '@/styles/Account.module.css'

interface SignupProps {
  setSwitch: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Signup({ setSwitch } : SignupProps) {
  return(
    <form className={styles.formBox}>
      <h1>Sign Up</h1>
      <input type="text" placeholder='Email address'/>
      <input type="text" placeholder='Password'/>
      <input type="text" placeholder='Repeat password'/>
      <button type='button'>Create an account</button>
      <p>Already have an account? &nbsp;<span onClick={() => setSwitch(true)}>Login</span></p>
    </form>
  )
}