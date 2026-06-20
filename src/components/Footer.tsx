import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 40px 50px;
  background-color: ${props => props.theme.background};
  border-top: 1px solid ${props => props.theme.border};

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const Copyright = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 0.9rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const FooterLink = styled.a`
  color: ${props => props.theme.secondary};
  transition: color 0.2s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>&copy; {new Date().getFullYear()} Krishna Sai Mulpuri</Copyright>
        <FooterLinks>
          <FooterLink href="https://www.linkedin.com/in/mulpk/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={18} />
          </FooterLink>
          <FooterLink href="https://github.com/krishnasaimulpuri" target="_blank" rel="noopener noreferrer">
            <FaGithub size={18} />
          </FooterLink>
          <FooterLink href="mailto:krishnasaimulpuri@gmail.com">
            <FaEnvelope size={18} />
          </FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
