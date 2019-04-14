import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Alert from 'react-bootstrap/Alert';
import '../components/bootstrap.min.css';

const IndexPage = () => (
    <Layout>
        <SEO title="Vivek Parekh Portfolio" keywords={[`Vivek`, `Parekh`, `portfilio`, `resume`]} />
        <h1>This site is still under construction!</h1>
        <Alert variant={'danger'}>This is a danger alert—check it out!</Alert>
    </Layout>
);

export default IndexPage;
