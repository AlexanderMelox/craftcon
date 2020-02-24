import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import { TextStroke } from '../utils/styles/common';
import rem from '../utils/styles/rem';
import mq from '../utils/styles/breakpoints';
import Sketch from '../components/Sketch';
import sketch from '../utils/p5/sketch';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${mq[0]} {
    height: 100vh;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'canvas content';
    overflow: hidden;
  }
`;

const Content = styled.div`
  margin-top: 2rem;

  ${mq[0]} {
    grid-area: content;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 0;
    padding-left: ${rem(40)};
    padding-bottom: ${rem(40)};
  }
`;

const Lead = styled.p`
  font-size: 1.3rem;
  font-weight: normal;
  line-height: 1.5;

  padding-left: 2rem;
  padding-right: 2rem;
  ${mq[0]} {
    font-size: ${rem(33)};
  }
`;

const Canvas = styled.section`
  width: 100%;
  position: relative;
  height: 60vh;

  ${mq[0]} {
    grid-area: canvas;
  }
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

// TODO: put hand in after p5 canvas gets added
const Hand = styled(CanvasImage)`
  width: 50%;
  top: 50%;
  left: 50%;
  max-width: 20rem;
  transform: translate(-50%, -50%);
  z-index: 5000;
  transition: all ease-in-out;
`;

const Date = styled(TextStroke)`
  display: inline-block;
  color: inherit;
`;

const CallToAction = styled.a`
  display: inline-block;
  margin-left: auto;
  margin-top: 3.125rem;
  outline: none;
  border: none;
  background-color: var(--yellow);
  background-blend-mode: lighten;
  font-size: ${rem(14)};
  font-family: inherit;
  text-transform: uppercase;
  padding: 0.8rem 5rem;
  transition: all 0.2s;
  text-decoration: none;
  color: var(--black);

  ${mq[0]} {
    margin-top: ${rem(20)};
    margin-right: ${rem(50)};
  }
`;

const Index = () => {
  return (
    <Layout>
      <Container>
        <Content>
          <Lead>
            <TextStroke>CRAFTCON</TextStroke> is the place for you to teach,
            showcase your skills, and learn from others. Join us for a day of
            fun and making on <Date>March 26</Date>
          </Lead>
          <CallToAction href="https://jamesxie.typeform.com/to/AuWIrz">
            Propose a workshop
          </CallToAction>
        </Content>
        <Canvas>
          <Sketch sketch={sketch} />
        </Canvas>
      </Container>
    </Layout>
  );
};

export default Index;
