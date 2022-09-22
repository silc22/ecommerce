import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Header.module.css"

 const Header = () => {
  return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.navBar}>
                    <Link href='/'>
                        <a>
                            <Image src={'/img/logo.svg'} width={400} height={100} alt='Logo Guitar LA'/>
                        </a>
                    </Link >
                    <nav className={styles.navigation}>
                        <Link href='/'>Home</Link>
                        <Link href='/about'> About Us</Link>
                        <Link href='/blog'>Blog</Link>
                        <Link href='/shop'>Shop</Link>
                    </nav>
                </div>
            </div>
        </header>

  )
}


export default Header