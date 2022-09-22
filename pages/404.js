import Link from "next/link"
import styles from "../styles/NotFound.module.css"

export const NotFound = () => {
  return (
        <div className={styles.not_found}>
            <h1 className="heading">Pagina no encontrada</h1>
            <Link href="/">Back to home</Link>
        </div>
  )
}


export default NotFound