import * as React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact">
      <p>Feel free to check out</p>
      <ul>
        <li>
          <Link
            to="https://www.linkedin.com/georgejphillips"
            target="_blank"
            rel="nofollow"
          >
            Linked in
          </Link>
        </li>
        <li>
          <Link
            to="https://www.github.com/georgejphillips"
            target="_blank"
            rel="nofollow"
          >
            Github
          </Link>
        </li>
      </ul>
    </Layout>
  );
};

export const Head = () => <title>Contact</title>;

export default ContactPage;
