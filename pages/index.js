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

        <h1 className='answer'>
            Manifesto for Agile Software Development
        </h1>

        <p className='question'>
        We are uncovering better ways of developing
        software by doing it and helping others do it
        Through this work we have come to value:
        </p>

        <h3 className='answer'>
          Individuals and interactions over processes and tools
          Working Software over comprehensive documentation
          Customer collaboration over contract negotiation
          Responding to change over following a plan
        </h3>

        <p className='question'>
          That is, while there is value in the items on
          the right, we value the items on the left more.
        </p>

      </section>
    </Layout>
  );
}