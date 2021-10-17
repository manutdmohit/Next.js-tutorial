import Link from 'next/link';
import Navbar from './Navbar';
import styles from '../styles/index.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.brand_box}>
          <Navbar />
        </div>
        <div className={styles.text_box}>
          <div className={styles.heading_primary}>
            <h1>Welcome to Next.js</h1>
          </div>

          <button className={styles.button}>
            <Link href="https://github.com/manutdmohit">
              <a target="_blank" id={styles.profile}>
                My Profile
              </a>
            </Link>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
