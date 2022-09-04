import * as React from 'react';
import Layout from '../components/layout';
import * as styles from './skills.module.scss';

const SkillsPage = () => {
  return (
    <Layout pageTitle="Skills">
      <p>Over the years I've learnt to use</p>
      <h2>Technologies</h2>
      <ul className={styles.gpSkillList}>
        <li>HTML</li>
        <li>CSS (mostly as SASS)</li>
        <li>BEM</li>
        <li>JS</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Gatsby</li>
        <li>Amplify UI</li>
        <li>GraphQL</li>
        <li>Node.js</li>
        <li>ES5/6</li>
        <li>Babel</li>
        <li>Basic PHP</li>
        <li>Bootstrap</li>
      </ul>
      <h2>CMSs</h2>
      <ul className={styles.gpSkillList}>
        <li>Drupal</li>
        <li>WordPress</li>
      </ul>
      <h2>Software</h2>
      <ul className={styles.gpSkillList}>
        <li>Figma</li>
        <li>Git</li>
        <li>VS Code</li>
        <li>Adobe CC</li>
      </ul>
      <h2>Project Management</h2>
      <ul className={styles.gpSkillList}>
        <li>Jira</li>
      </ul>
    </Layout>
  );
};

export const Head = () => <title>Skills</title>;

export default SkillsPage;
