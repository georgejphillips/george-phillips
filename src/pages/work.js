import * as React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const Work = () => {
  return (
    <Layout pageTitle={"Things I've worked on"}>
      <p>
        I've been lucky enough to work on these websites recently
      </p>
      <ul>
        <li>
          <Link
            to="https://www.carhartt-wip.com/"
            rel="nofollow"
            target="_blank"
          >
            Carhartt WIP
          </Link>
        </li>
        <li>
          <Link to="/" rel="nofollow" target="_blank">
            WWF Eat For Change
          </Link>
        </li>
        <li>
          <Link to="https://www.yotel.com" rel="nofollow" target="_blank">
            Yotel
          </Link>
        </li>
        <li>
          <Link to="https://www.salford.ac.uk" rel="nofollow" target="_blank">
            University of Salford
          </Link>
        </li>
        <li>
          <Link to="https://www.ses.com" rel="nofollow" target="_blank">
            SES
          </Link>
        </li>
        <li>
          <Link to="https://www.iqstudentaccommodation.com" rel="nofollow" target="_blank">
            IQ Student Accommodation
          </Link>
        </li>
        <li>
          <Link to="https://www.xplor.com" rel="nofollow" target="_blank">
            Xplor
          </Link>
        </li>
        <li>
          <Link to="https://spark.iop.org" rel="nofollow" target="_blank">
            IOP Spark
          </Link>
        </li>
      </ul>
      <p>I've also been lucky enough to work with the brands in the past</p>
      <ul>
        <li>Barbour</li>
        <li>Placebo</li>
        <li>Taylors of Harrogate</li>
        <li>Tony Blair Institute of Global Change</li>
        <li>SAB Miller</li>
      </ul>
    </Layout>
  );
};

export default Work;

export const Head = () => <title>Things I've Workd On</title>;
