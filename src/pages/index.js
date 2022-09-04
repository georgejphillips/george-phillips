import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Hi! My name is George">
      <p>
        I'm a front-end web developer based in London, UK. I've been making
        websites for over 10 years and I still love to learn new things.
      </p>
      <StaticImage
        alt="George and his dog, Beanz a blonde chiwawa cross"
        src="../images/me.jpg"
        width={400}
      />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
