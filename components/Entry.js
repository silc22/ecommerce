import Link from 'next/link'
import Image from 'next/image'
import {dateFormat} from '../helpers'
import styles from "../styles/Entry.module.css"

const Entry = ({result}) => {

    const { title, resume, image, published_at, id , url} = result

  return (
        <article>

            <Image 
                src={image.url} 
                alt={title} 
                width={800} 
                height={600} 
                layout="responsive"
                priority='true'/>

            <div className={styles.content}>
                <h3 className={styles.content}> {title} </h3>
                <p className={styles.date}> {dateFormat(published_at)} </p>
                <p className={styles.resume}> {resume} </p>
                <Link 
                    href={`/blog/${url}`}>
                        <a className={styles.link}>
                            Read More
                        </a>
                </Link>
            </div>

        </article>
  )
}

export default Entry