// styles.js
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  scroll-behavior: smooth;
  overflow-x: hidden;
`;

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(51, 51, 51, 0.95);
  padding: 1rem;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-right: 1rem;  
  margin-right: 2rem;
  
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    font-size: 0.9rem;
    
    &:hover {
      color: #e91e63;
    }
  }
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const Section = styled.section`
  min-height: 80vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fadeIn} 1s ease-out;
`;

export const HomeSection = styled(Section)`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  color: white;
  text-align: center;
  height: 100vh; 
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 50px;
  border: 2px solid white;
  border-radius: 15px;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    transform: translateX(-50%);
    animation: scrollAnimation 2s infinite;
  }
  
  @keyframes scrollAnimation {
    0% { top: 8px; opacity: 1; }
    100% { top: 32px; opacity: 0; }
  }
`;

export const AboutSection = styled(Section)`
  background-color: #ffffff;
`;

export const ProjectsSection = styled(Section)`
  background-color: #f7f7f7;
  padding: 6rem 2rem;
  min-height: auto;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: #e91e63;
    border-radius: 2px;
  }
`;

export const SkillsSection = styled(Section)`
  background-color: #f9f9f9;
  padding: 6rem 2rem;
  min-height: auto;
`;

export const SkillsContainer = styled.div`
  max-width: 1400px;
  margin: 2rem auto;
  padding: 2rem;
`;

export const SkillsRow = styled.div`
  display: flex;
  gap: 20rem;
  justify-content: center;
  margin: 3rem 0;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const SkillsColumn = styled.div`
  flex: 1;
  max-width: 600px;
`;

export const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 1.5rem 0; 
`;

export const SkillsCategoryTitle = styled.h3`
  font-size: 1.8rem;
  color: #444;
  margin-bottom: 3rem;
  text-align: center;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 4rem;
  padding: 2rem 0;
  place-items: center;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export const SkillCard = styled(motion.div)`
  background: transparent;
  width: 280px;
  height: 320px;
  perspective: 1000px;
  cursor: pointer;
  margin: 15px auto;
  
  @media (max-width: 1200px) {
    width: 250px;
    height: 300px;
  }
`;

export const SkillCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  
  ${SkillCard}:hover & {
    transform: rotateY(180deg);
  }
`;

export const SkillCardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const SkillCardFront = styled(SkillCardFace)`
  background: white;
`;

export const SkillCardBack = styled(SkillCardFace)`
  background: #e91e63;
  color: white;
  transform: rotateY(180deg);
`;

export const SkillIcon = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 1.5rem;
`;

export const SkillInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SkillDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin: 0 0 1.5rem 0;
`;

export const SkillPeriod = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

export const SkillName = styled.h4`
  font-size: 1.4rem;
  color: #333;
  margin: 0;
  padding: 0;
`;

export const SkillLevel = styled.div`
  width: 100%;
  height: 6px;
  background-color: #f0f0f0;
  border-radius: 3px;
  margin-top: 0.5rem;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    width: ${props => props.level}%;
    height: 100%;
    background-color: #e91e63;
    border-radius: 3px;
    transition: width 1s ease-in-out;
  }
`;

export const ProjectsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  padding: 3rem 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: #e91e63;
    transform: translateX(-50%);
  }
`;

export const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: calc(50% - 100px); /* Reduced width to move cards further from center */
  position: relative;
  margin: 2rem 0;
  
  ${props => props.position === 'left' ? `
    margin-right: auto;
    &::after {
      content: '';
      position: absolute;
      right: -3rem; /* Increased from -50px to -100px */
      top: 50%;
      width: 55px; /* Increased from 50px to 100px */
      height: 2px;
      background: #e91e63;
      transform: translateY(-50%);
    }
  ` : `
    margin-left: auto;
    &::after {
      content: '';
      position: absolute;
      left: -3rem; /* Increased from -50px to -100px */
      top: 50%;
      width: 55px; /* Increased from 50px to 100px */
      height: 2px;
      background: #e91e63;
      transform: translateY(-50%);
    }
  `}

  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: #e91e63;
    border: 4px solid #f7f7f7;
    border-radius: 50%;
    top: 50%;
    ${props => props.position === 'left' ? 'right: -3rem;' : 'left: -3rem;'} /* Adjusted from -62px to -112px */
    transform: translateY(-50%);
    z-index: 1;
    box-sizing: content-box;
  }
`;

export const ProjectTitle = styled.h3`
  color: #e91e63;
  margin-bottom: 1rem;
`;

export const ProjectTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  background: #f0f0f0;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  color: #666;
`;

export const ContactSection = styled(Section)`
  background: #1a1a1a;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, #e91e63 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, #2196f3 0%, transparent 50%);
    opacity: 0.1;
    z-index: 1;
  }
`;

export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ContactInfo = styled.div`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: #e91e63;
  }
`;

export const ContactForm = styled.form`
  position: relative;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #e91e63, #2196f3);
    border-radius: 22px;
    z-index: -1;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  min-height: 150px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #e91e63, #2196f3);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(233, 30, 99, 0.3);
  }
`;

export const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
  }
  
  svg {
    color: #e91e63;
    font-size: 1.5rem;
  }
`;

export const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s ease, transform 0.2s ease;
  position: relative;

  &:hover {
    color: #4fd1c5;
    transform: translateX(3px);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const ThankYouMessage = styled.p`
  margin-top: 5rem;
  font-size: 35px;
  text-align: center;
  font-style: italic;
  opacity: 0.8;
`;