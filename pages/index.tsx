import Head from "next/head";

import Intro from "@components/sections/intro";

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tom Fullylove</title>
      </Head>
      <Intro />
    </>
  );
};

export default Index;
