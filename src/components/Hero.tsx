import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 50px;
  background-color: ${props => props.theme.background};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, ${props => props.theme.gradientStart}10, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, ${props => props.theme.gradientEnd}10, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Greeting = styled(motion.span)`
  font-size: 1.1rem;
  color: ${props => props.theme.primary};
  font-weight: 600;
  margin-bottom: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: ${props => props.theme.text};
  letter-spacing: -1.5px;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.secondary};
  margin-bottom: 12px;
  max-width: 650px;
  line-height: 1.6;
`;

const TagLine = styled(motion.p)`
  font-size: 1rem;
  color: ${props => props.theme.secondary};
  margin-bottom: 40px;
  max-width: 550px;
  line-height: 1.6;
  opacity: 0.8;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
`;

const SocialLink = styled(motion.a)`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.secondary};
  border: 1px solid ${props => props.theme.border};
  background: ${props => props.theme.cardBackground};
  transition: all 0.2s ease;

  &:hover {
    color: ${props => props.theme.primary};
    border-color: ${props => props.theme.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${props => props.theme.primary}20;
  }
`;

const CTAGroup = styled(motion.div)`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

const PrimaryButton = styled(motion.a)`
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 600;
  background: linear-gradient(135deg, ${props => props.theme.gradientStart}, ${props => props.theme.gradientEnd});
  color: white;
  border-radius: 12px;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${props => props.theme.primary}40;
  }
`;

const SecondaryButton = styled(motion.a)`
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 600;
  background: transparent;
  color: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.border};
  border-radius: 12px;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;

  &:hover {
    border-color: ${props => props.theme.primary};
    color: ${props => props.theme.primary};
    transform: translateY(-2px);
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I'm
        </Greeting>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Krishna Sai Mulpuri
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Senior Software Engineer at Oracle
        </Subtitle>
        <TagLine
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Distributed Systems &middot; Observability &middot; AI-Assisted Engineering
        </TagLine>
        <SocialLinks
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SocialLink
            href="https://www.linkedin.com/in/mulpk/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin size={20} />
          </SocialLink>
          <SocialLink
            href="https://github.com/krishnasaimulpuri"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={20} />
          </SocialLink>
          <SocialLink
            href="mailto:krishnasaimulpuri@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope size={20} />
          </SocialLink>
        </SocialLinks>
        <CTAGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <PrimaryButton
            href="#experience"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
          </PrimaryButton>
          <SecondaryButton
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
          </SecondaryButton>
        </CTAGroup>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
