import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './layout.module.scss';

const Layout = ({ pageTitle, children }) => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div>
      <header>
        <nav className={styles.gpNav}>
          <div className={styles.container}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className={styles.container}>
          <h1>{pageTitle}</h1>
          {children}
        </div>
      </main>
      <footer className={styles.gpFooter}>
        <div className={styles.container}>&copy; George Phillips {getYear()}</div>
      </footer>
    </div>
  );
};

export default Layout;
