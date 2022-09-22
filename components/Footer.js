import Link from "next/link"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>

          <div className={`contendor ${styles.contenido}`}>

              <nav className={styles.navegation}>
                          <Link href='/'>Home</Link>
                          <Link href='/about'> About Us</Link>
                          <Link href='/blog'>Blog</Link>
                          <Link href='/shop'>Shop</Link>
              </nav>

              <p className={styles.copyright}>
                  All right reserved
              </p>
          </div>
    
    </footer>
  )
}

export default Footer