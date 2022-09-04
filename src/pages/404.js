import * as React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  return (
    <Layout pageTitle={'Page not found'}>
      <Link to="/">Go home, you're drunk</Link>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
