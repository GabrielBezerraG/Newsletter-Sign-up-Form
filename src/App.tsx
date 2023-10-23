import { useState } from 'react';
import styles from './App.module.scss';
import Homepage from 'components/Homepage';
import Success from 'components/Success';

export default function App() {

  const [success, setSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {success
          ? <Success
            email={email}
            setEmail={setEmail}
            setSuccess={setSuccess}
          />
          : <Homepage
            email={email}
            setEmail={setEmail}
            setSuccess={setSuccess}
          />
        }
      </div>
    </div>
  )
}