import Navbar from '../components/Navbar';
import Head from 'next/head';

const home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <h1>This is homepage</h1>
    </>
  );
};

export default home;
