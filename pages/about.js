import Navbar from '../components/Navbar';
import Image from 'next/image';
import Head from "next/head"

const about = () => {
  return (
    <>
    <Head>
      <title>About</title>
    </Head>
      <Navbar />
      <div style={{ textAlign: 'center' }}>
        <h1>This is about page</h1>
        {/* <Image src="/pc.png" width="100" height="100"></Image> */}
        <Image
          src="https://images.unsplash.com/photo-1553272725-086100aecf5e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80"
          width="500"
          height="350"
          alt="about"
        ></Image>
      </div>
    </>
  );
};

export default about;
