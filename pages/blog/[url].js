import Layout from "../../components/Layout"
import Image from "next/image"
import {dateFormat} from "../../helpers/index"
import styles from "../../styles/Entry.module.css"

const BlogEntry = ({result}) => {

  const { content, image, published_at, title} = result


  return (
    <Layout
      page={title}>
        <main className="contenedor">
            <h1 className="heading"> {title}</h1>
            <article className={styles.entry}>
              <Image layout='responsive' width={800} height={600} src={image.url} alt={`Entry image: ${title}`}/>
            </article>
            <div className={styles.content}>
              <p className={styles.date}>{dateFormat(published_at)}</p>
              <p className={styles.text}>{content}</p>
            </div>
        </main>
    </Layout>
  )
}

export async function getStaticPaths() {

  const url = `${process.env.API_URL}/blogs`
  const response = await fetch(url)
  const results = await response.json() 

  const paths = results.map(result => ({
    params: { url: result.url }
  }))


    return{
      paths,
      fallback: false
  }
}

export async function getStaticProps({params: {url}}) {

  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`
  const response = await fetch(urlBlog)
  const result = await response.json()


    return{
        props:{
          result: result[0]
        }
    }
}

// export async function getServerSideProps({query: {id}}) {

//   const url = `${process.env.API_URL}/blogs/${id}`
//   const response = await fetch(url)
//   const result = await response.json()


//     return{
//         props:{
//           result
//         }
//     }
// }

export default BlogEntry