import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Head from 'next/head';

const pageNo = () => {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  return (
    <>
      <Head>
        <title>Blog {pageNumber}</title>
      </Head>
      <Navbar />
      Blog {pageNumber}
    </>
  );
};

export default pageNo;
