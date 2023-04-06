import Head from 'next/head';
import { Intro, Experience, Links, Footer } from '@components/sections';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tom Fullylove</title>
      </Head>
      <Intro />
      <Links />
      <Experience />
      <Footer />
    </>
  )
};

export default Index;
