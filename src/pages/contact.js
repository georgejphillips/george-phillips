import * as React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact">
      <p>Feel free to check out</p>
      <ul>
        <li>
          <Link to="www.linkedin.com/georgejphillips">Linked in</Link>
        </li>
        <li>
          <Link to="www.github.com/georgejphillips">Github</Link>
        </li>
      </ul>
    </Layout>
  );
};

export const Head = () => <title>Contact</title>;

export default ContactPage;
