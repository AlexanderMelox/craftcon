import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';

// const Poster = styled.section`
//   display: grid;
//   grid-template-columns: 2fr 1fr;
//   height: calc(100vh - 142px);
// `;

// const Controls = styled.aside`
//   margin-top: 0;
//   padding: 0 1rem;
// `;

// const SVGImageContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const SVGImage = styled.img`
//   width: 7rem;
//   cursor: pointer;
//   opacity: 0.8;
//   margin-right: 1rem;

//   :hover {
//     opacity: 1;
//   }
// `;

const Content = styled.div`
  margin-top: 2rem;
`;

const H1 = styled.h1`
  background-image: linear-gradient(to right, var(--yellow), transparent);
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: 20px 0%;
  margin-bottom: 2rem;
`;

const Lead = styled.p`
  font-size: 1.6rem;
`;

const Index = () => {
  return (
    <Layout>
      <Content>
        <H1>Are you a maker?</H1>
        <Lead>
          CraftCon is the place for you to teach, showcase your skills, and
          learn from others. All are welcome to join us Craftcon for a day of
          fun and making.
        </Lead>
      </Content>
    </Layout>
  );
};

export default Index;
