import Navbar from '../../components/Navbar';
import Head from 'next/head';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const blog = ({ data }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Navbar />
      {data.slice(0, 5).map((currElem) => (
        <div key={currElem.id} className="ssr-styles">
          <h3>{currElem.id}</h3>

          <Link href={`/blog/${currElem.id}`}>
            <h2>{currElem.title}</h2>
          </Link>
        </div>
      ))}
    </>
  );
};

export default blog;
