import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import Layout from '../../components/Layout/Layout';

/**
* @author
* @function Home
**/

const Home = (props) => {
  return (
    <Layout>
      <Jumbotron className="text-center" style={{margin: '4rem', background: '#fff'}}>
        <h1>Welcome to Admin Dashboard</h1>
      </Jumbotron>
    </Layout>
  );
}

export default Home;