import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

        <p className='question'>1. Introduce yourself.  What are your hobbies, favourite music, favourite food, and other things about yourself.</p>
        <h6 className='answer'>I'm Klyde Sangalang. My hobby is playing videogames, my favourite music is classics, and the other things is I like to sleep.</h6>
        <p className='question'>
        2. Why did you take up CPE?
        </p>
        <h6 className='answer'>
            In order to learn and process more data processing and to grasp more knowledge about the industry.
        </h6>

        <p className='question'>
        3.  What career do you see yourself exploring after graduation.
        </p>

        <h6 className='answer'>
          I see myself as an developer and exploring the depths of data processing.
        </h6>

      </section>
    </Layout>
  );
}