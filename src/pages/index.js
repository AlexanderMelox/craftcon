import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import { TextStroke } from '../utils/styles/common';
import rem from '../utils/styles/rem';
import mq from '../utils/styles/breakpoints';
import Sketch from '../components/Sketch';
import sketch from '../utils/p5/sketch';

const Container = styled.div`
  overflow: hidden;
`;

const Content = styled.div`
  margin-top: 10rem;
  z-index: 20;

  ${mq[0]} {
    position: absolute;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 0;
    padding-left: ${rem(40)};
    padding-bottom: ${rem(40)};
    left: 50%;
    top: 0;
  }
`;

const Lead = styled.p`
  font-size: 1.3rem;
  font-weight: normal;
  line-height: 1.5;

  ${mq[0]} {
    font-size: ${rem(33)};
    padding: 0 2rem;
  }
`;

const Canvas = styled.section`
  display: none;
  position: relative;

  ${mq[0]} {
    display: block;
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
  }
`;

const Hand = styled.img`
  display: none;
  width: 100%;
  max-width: ${rem(350)};

  ${mq[0]} {
    display: block;
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
  }
`;

const Date = styled(TextStroke)`
  display: inline-block;
  color: inherit;
`;

const CallToAction = styled.a`
  display: inline-block;
  margin-left: auto;
  margin-top: 1rem;
  outline: none;
  border: none;
  background-color: var(--yellow);
  background-blend-mode: lighten;
  font-size: ${rem(10)};
  font-family: inherit;
  text-transform: uppercase;
  padding: 0.8rem 5rem;
  transition: all 0.2s;
  text-decoration: none;
  color: var(--black);

  ${mq[0]} {
    margin-top: ${rem(20)};
    margin-right: ${rem(50)};
    font-size: ${rem(14)};
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
          <Hand src="/hand.png" />
          <Sketch sketch={sketch} />
        </Canvas>
      </Container>
    </Layout>
  );
};

export default Index;
