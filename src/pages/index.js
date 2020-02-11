import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import { TextStroke } from '../utils/styles/common';
import rem from '../utils/styles/rem';

const Content = styled.div`
  margin-top: 2rem;
`;

const Lead = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;

const Canvas = styled.section`
  width: 100%;
  position: relative;
  height: 60vh;
`;

const CanvasImage = styled.img`
  max-width: 100%;
  width: 15rem;
  position: absolute;
  top: ${props => props.top};
`;

const Grid = styled(CanvasImage)`
  width: 100%;
`;
const Hand = styled(CanvasImage)`
  width: 50%;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5000;
  transition: all ease-in-out;
`;

const Date = styled(TextStroke)`
  display: block;
  color: inherit;
`;

const CallToAction = styled.button`
  display: block;
  margin-left: auto;
  margin-top: 3.125rem;
  outline: none;
  border: none;
  background: transparent;
  font-size: ${rem(14)};
  font-family: inherit;
  font-weight: 700;
  text-transform: uppercase;
  border: 0.3rem solid var(--yellow);
  padding: 0.5rem 0.5rem;
  transition: all 0.2s;

  :hover {
    background-color: var(--yellow);
  }
`;

const Index = () => {
  return (
    <Layout>
      <Content>
        <Lead>
          <TextStroke>Craftcon</TextStroke> is the place for you to teach,
          showcase your skills, and learn from others. All are welcome to join
          us Craftcon for a day of fun and making.
          <Date>March 26</Date>
        </Lead>
        <CallToAction>Propose a workshop</CallToAction>
      </Content>
      {/* TODO: This is where the p5 canvas will live */}
      <Canvas>
        <Grid src="/svg/Grid.svg" />
        <Hand src="/hand.png" />
      </Canvas>
    </Layout>
  );
};

export default Index;
