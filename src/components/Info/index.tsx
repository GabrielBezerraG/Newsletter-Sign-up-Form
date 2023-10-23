import styles from './Info.module.scss';

const list = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!"
];

export default function Info() {
  return (
    <div className={styles.info}>
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        {list.map((text, index) => (
          <li key={index}>
            <i />
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}