import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>I'm a front-end developer from London.</p>
      <p>
        I love solving problems, debugging problem code (god bless the humble
        console.log), and helping UX UI understand their roles in accessibility
        and information architecture.
      </p>
      <p>
        I love music. I collect records and play bass in an internationally
        touring band.
      </p>
      <p>
        I love to build things. Websites, Lego, and guitar pedals are my
        favorite things to build.
      </p>
      <p>
        I love playing games. Dungeons & Dragons, board games, and video games.
      </p>
      <p>I love football, wrestling, and movies.</p>
      <p>I love my dog Beanz and my cat Olvia.</p>
    </Layout>
  );
};

export const Head = () => <title>About me</title>;

export default AboutPage;
