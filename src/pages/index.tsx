import { Flex, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>book一覧</title>
      </Head>
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100wh"
        height="100vh"
      >
        <Heading>Content</Heading>
      </Flex>
    </>
  );
};

export default Home;
