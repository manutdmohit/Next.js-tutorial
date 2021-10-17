import Header from '../components/Header';
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Next.js Free Tutorials" />
        <meta name="keywords" content="Next.js" />
        <meta name="author" content="Mohit Saud" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Header />
    </>
  );
};

export default index;
