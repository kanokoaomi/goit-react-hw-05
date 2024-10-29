import { Link } from "react-router-dom"
import styles from "./NotFoundPage.module.css"

const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.notFound}>Page is not found!</p>
      <Link to="/" className={styles.return}>Return to the home screen</Link>
    </div>
  )
}

export default NotFoundPage