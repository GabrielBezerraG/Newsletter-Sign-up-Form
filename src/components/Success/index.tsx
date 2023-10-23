import Props from 'interfaces/Props';
import styles from './Success.module.scss';

export default function Success({email, setEmail, setSuccess} : Props) {

  const reset = () => {
    setEmail('');
    setSuccess(false);
  }

  return (
    <div className={styles.success}>
      <div className={styles.success__content}>
        <i />
        <h1>Thanks for subscribing!</h1>
        <p> 
          A confirmation email has been sent to
          <span> {email}</span>
          . Please open it and click the button inside to confirm your subscription. 
        </p>
      </div>
      <button onClick={reset}>Dismiss message</button>
    </div>
  )
}