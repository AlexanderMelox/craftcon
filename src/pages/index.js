import React, { useContext } from 'react';
import Layout from '../components/layout';
import { store } from '../store';

const IndexPage = () => {
  const { state, dispatch } = useContext(store);
  console.log({ state });
  return (
    <Layout>
      Home
      <button onClick={() => dispatch({ type: 'TOGGLE_EDITING' })}>
        Edit this page
      </button>
    </Layout>
  );
};

export default IndexPage;
