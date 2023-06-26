import Head from 'next/head';
import { Intro, Links, Footer } from '@components/sections';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tom Fullylove</title>
      </Head>
      <Intro />
      <Links />
      <Footer />
    </>
  )
};

export default Index;
