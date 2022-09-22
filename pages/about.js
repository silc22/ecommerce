import Image from 'next/image'
import Layout from '../components/Layout'
import styles from "../styles/AboutUs.module.css"

 const AboutUs = () => {
  return (
      <Layout
        page="About Us">

        <main className='contenedor'>
          <h2 className='heading'>
              About Us
          </h2>
          <div>

            <div className={styles.contenido}>
              <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg"/>

              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ligula lobortis, auctor dolor quis, sodales leo. Nunc rutrum, tellus volutpat laoreet lobortis, dui quam porttitor augue, eu rutrum neque diam eget enim. In at justo leo. Vestibulum lacus neque, ultrices nec accumsan vitae, aliquet eget arcu. Vivamus at consectetur neque. Sed eget ipsum eget nunc condimentum interdum et vel lectus. Donec ultrices leo felis. Phasellus dictum lectus ultricies neque posuere, sit amet placerat sem vulputate. Praesent non dolor imperdiet, sagittis ipsum non, bibendum ante. Nullam laoreet, massa sed eleifend pretium, nibh risus scelerisque nunc, efficitur sodales risus risus eget urna. In pulvinar est metus, eget cursus velit aliquam nec. Duis porttitor ullamcorper lorem eu suscipit. Aenean volutpat molestie felis, ut iaculis ex pretium non. Nullam id tellus et sapien auctor ultrices eu ac sem. Vestibulum efficitur veliles ligula.
              </p>
            </div>
          </div>
        </main>
      </Layout>
  )
}

export default AboutUs