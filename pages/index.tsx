import Head from 'next/head';
import { Intro, Experience } from '../components/sections';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tom Fullylove</title>
      </Head>
      <Intro />
      <Experience />
    </>
  )
};

export default Index;
