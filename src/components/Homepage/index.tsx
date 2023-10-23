import Info from 'components/Info';
import styles from './Homepage.module.scss';
import Form from 'components/Form';
import Props from 'interfaces/Props';

export default function Homepage({setSuccess, setEmail, email} : Props ) {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage__image} />
      <div className={styles.homepage__content}>
        <Info />
        <Form 
          setSuccess={setSuccess}
          setEmail={setEmail} 
          email={email}
        />
      </div>
    </div>
  )
}