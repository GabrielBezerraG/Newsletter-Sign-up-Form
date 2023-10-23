import { useState } from 'react';
import styles from './Form.module.scss';
import validateEmail from 'utils/validateEmail';
import Props from 'interfaces/Props';

export default function Form({setSuccess, setEmail, email} : Props ) {

  const [error, setError] = useState<boolean>(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (validateEmail(email)) {
      setSuccess(true);
    } else {
      setError(true);
    }
  }

  return (
    <form 
      className={styles.form}
      onSubmit={submit}
    >
      <div className={styles.form__labels}>
        <label htmlFor='email'>
          Email address
        </label>
        {error && <span>Valid email required</span>}
      </div>
      <input
        onChange={e => setEmail(e.target.value)}
        value={email}
        id='email'
        type='text'
        placeholder='email@company.com'
        className={`${styles.form__input} ${error && styles['form__input--error']}`}
      />
      <button
        type='submit'
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  )
}