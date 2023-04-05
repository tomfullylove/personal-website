import Head from 'next/head';
import { Intro, Experience, Links } from '@components/sections';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tom Fullylove</title>
      </Head>
      <Intro />
      <Links />
      <Experience />
    </>
  )
};

export default Index;
