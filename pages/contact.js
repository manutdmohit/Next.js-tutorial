import Navbar from '../components/Navbar';
import Head from 'next/head';

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar />
      {/* inline css */}
      {/* <h1 style={{ color: 'red' }}>This is contact page</h1> */}
      <h1>This is contact page</h1>
      <p className="para">Have a good day</p>
      {/* styled-jsx */}
      <style>
        {`
          h1{
            color : green;
          }
          .para{
            color: red;
          }
          `}
      </style>
    </>
  );
};

export default contact;
