import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Head from 'next/head';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  const paths = data.map((currElem) => {
    return {
      params: {
        pageNo: currElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const pageNo = ({ data }) => {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  return (
    <>
      <Head>
        <title>Blog {pageNumber}</title>
      </Head>
      <Navbar />
      <div className="ssr-styles ssr-styles-inside">
        <h3>{data.id}</h3>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    </>
  );
};

export default pageNo;
