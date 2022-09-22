
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children, page}) => {

  const titleMessage = `Guitar L.A | ${page}`

  return (
    <div>
        <Head>

            <title>
                {titleMessage}
            </title>
            <meta name='description' content='E-commerce website'/>
        
        </Head>
        <Header/>

        {children}

        
        <Footer/>
    </div>
  )
}

export default Layout