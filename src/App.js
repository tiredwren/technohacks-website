import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import heroImage from './assets/image.png';
import Register from './components/Register';
import './firebaseConfig';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Inconsolata", monospace;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
      "wdth" 100;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const App = () => {
  const sectionRefs = useRef([]);
  sectionRefs.current = [];

  const addToRefs = (el) => {
    if (el) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Main>
        <Section id="home" ref={addToRefs}>
          <HeroSection>
            <HeroContent>
              <Title>Welcome to TechnoHacks</Title>
              <Subtitle>Collaborate, learn, and build something amazing!</Subtitle>
              <StyledButton>REGISTER NOW</StyledButton>
            </HeroContent>
          </HeroSection>
        </Section>

        <Section id="about" ref={addToRefs}>
          <About>
            <p>The Technovation chapter at Skyline High School is dedicated to empowering young women and under-represented individuals in STEM fields.</p>
            <p>Our mission is to combine business acumen with coding skills to create innovative solutions through the Technovation Challenge, an annual global competition. We believe in fostering early improvement in critical thinking, problem-solving, and teamwork through engaging and hands-on experiences.</p>
            <p><strong>TechnoHacks</strong> is our upcoming weekend-long invention marathon designed to provide middle and high school students from the Sammamish area an opportunity to develop their skills, create impactful projects, and prepare for the international competition.</p>
          </About>
        </Section>

        <Section id="schedule" ref={addToRefs}>
          <Schedule>
            <h2>Event Schedule</h2>
            <ScheduleGrid>
              <EventCard>
                <h3>Day 1</h3>
                <p>Kickoff and Team Formation</p>
              </EventCard>
              <EventCard>
                <h3>Day 2</h3>
                <p>Coding and Workshops</p>
              </EventCard>
              <EventCard>
                <h3>Day 3</h3>
                <p>Final Presentations and Awards</p>
              </EventCard>
            </ScheduleGrid>
          </Schedule>
        </Section>

        <Section id="register" ref={addToRefs}>
          <h2>Register for TechnoHacks</h2>
          <Register />
        </Section>
      </Main>
    </>
  );
};

const Main = styled.main`
  scroll-behavior: smooth;
  color: #000;
  background-color: #f8edeb;
  padding: 50px 0px;
`;

const Section = styled.section`
  padding: 10px 20px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.6s ease-in-out;
  &.fadeIn {
    opacity: 1;
    animation: ${fadeIn} 0.8s ease-in-out;
  }
`;

const HeroSection = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #03071e;
  border-radius: 5px;
  margin-top: 30px;
`;

const HeroContent = styled.div`
  background: rgba(255, 255, 255, 0.6);
  width: 90%;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-family: "Inconsolata", monospace;
  font-weight: 600;
  background-color: #f07167;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f08080;
  }
`;

const About = styled.div`
  max-width: 90%;
  margin: 40px auto;
  text-align: left;
  line-height: 1.8;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Schedule = styled.div``;

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const EventCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

export default App;
