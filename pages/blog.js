import Entry from '../components/Entry'
import Layout from '../components/Layout'
import styles from '../styles/Blog.module.css'

const Blog = ({results}) => {


  return (
    <Layout
        page="Blog">

        <main className='contenedor'>
          <h2 className='heading'>Blog</h2>
        
          <div className={styles.blog}>
             {results.map(result => (
               <Entry 
                    key={result.id}
                    result={result}
               />
             ))}
          </div>
        </main>

      </Layout>
  )
}


export async function getServerSideProps(){
  
      const url = `${process.env.API_URL}/blogs`
      const response = await fetch(url)
      const results = await response.json()

  return{
    props: {
      results
    }
  }
}

export default Blog