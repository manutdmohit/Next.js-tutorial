import { useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/');
    }, 3000);
  }, []);

  const clickHandler = () => {
    router.push('/');
  };

  return (
    <>
      <Navbar />
      <div id="notfound">
        <div className="notfound">
          <h1>404</h1>
        </div>
        <h2>We are sorry, Page not found!</h2>
        <p>
          The page you are looking for might have been changed or is temporarily
          unavailable.
        </p>
        <Link href="/">
          <a>Back to Homepage</a>
        </Link>
        <button onClick={clickHandler}>Button to Homepage</button>
      </div>
    </>
  );
};

export default ErrorPage;
