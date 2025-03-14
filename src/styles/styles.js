// styles.js
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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
  z-index: 1000;
  background: ${props => props.$scrolled
    ? 'rgba(10, 15, 30, 0.95)'
    : 'rgba(10, 15, 30, 0.7)'};
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.$scrolled
    ? '0 4px 20px rgba(0, 0, 0, 0.2)'
    : 'none'};
  transition: all 0.3s ease;
  padding: ${props => props.$scrolled ? '0.6rem 0' : '1rem 0'};
`;

export const ContactWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoText = styled.h1`
  color: white;
  margin: 0;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  background: linear-gradient(45deg, #64ffda, #3d84ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(3px);
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const LogoAccent = styled.span`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: -2px;
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 11000;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuIcon = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: white;
    border-radius: 3px;
    transition: all 0.3s ease;
    
    &:nth-child(1) {
      transform: ${props => props.open ? 'rotate(45deg) translate(5px, 10px)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.open ? '0' : '1'};
    }
    
    &:nth-child(3) {
      transform: ${props => props.open ? 'rotate(-45deg) translate(5px, -10px)' : 'rotate(0)'};
    }
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    background: rgba(10, 15, 30, 0.95);
    backdrop-filter: blur(10px);
    padding: 5rem 2rem 2rem;
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
    z-index: 1000;
    gap: 1.5rem;
    box-shadow: ${props => props.$isOpen ? '-5px 0 30px rgba(0, 0, 0, 0.3)' : 'none'};
  }
`;

export const NavItem = styled.li`
  position: relative;
`;

export const NavLink = styled.a`
  color: ${props => props.$isActive ? 'white' : 'rgba(255, 255, 255, 0.7)'};
  text-decoration: none;
  font-weight: ${props => props.$isActive ? '600' : '400'};
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
  
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    background: linear-gradient(90deg, #64ffda, #3d84ff);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: white;
    
    &:before {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem 0;
    
    &:before {
      bottom: -2px;
    }
  }
`;

export const ContactButton = styled.a`
  background: linear-gradient(90deg, #64ffda, #3d84ff);
  color: rgba(10, 15, 30, 1);
  text-decoration: none;
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  display: inline-block;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(100, 255, 218, 0.3);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-top: 1rem;
  }
`;

// Composant de base
export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

// Section d'accueil complètement repensée avec un design plus moderne
export const HomeSection = styled(Section)`
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

// Cercles colorés flottants pour un fond dynamique
export const ColorCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
  z-index: 1;
`;

// Grille d'arrière-plan
export const Grid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 1;
`;

// Container du contenu principal 
export const ContentContainer = styled(motion.div)`
  z-index: 2;
  width: 90%;
  max-width: 1200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

// Ligne séparatrice animée
export const AnimatedLine = styled(motion.div)`
  height: 3px;
  background: linear-gradient(90deg, #00c6ff 0%, #0072ff 100%);
  width: 150px;
  margin: 20px 0;
  border-radius: 3px;
`;

// Badge flottant de technologies
export const TechBadge = styled(motion.div)`
  position: absolute;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  z-index: 3;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    display: none;
  }
`;

// Icône
export const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color || '#ffffff'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: black;
  font-weight: bold;
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

export const AboutSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f172a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

export const AboutTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const AboutCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transform: scale(0.98);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1);
  }
`;

export const AboutDescription = styled.p`
  color: #e5e5e5;
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Particle = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  opacity: 0.3;
  pointer-events: none;
  left: ${props => props.left}vw;
  top: ${props => props.top}vh;
  animation: float ${props => props.duration}s linear infinite;

  @keyframes float {
    0%, 100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(20px, -20px);
    }
  }
`;

export const SkillTag = styled.span`
  background: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }
`;
export const PassionsContainer = styled.div`
  margin-bottom: 2.5rem;
`;

export const PassionHeading = styled.h3`
  color: #f5f5f5;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #64ffda, #3d84ff);
    border-radius: 3px;
  }
`;

export const PassionsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const PassionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const PassionIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const PassionText = styled.span`
  color: #e0e0e0;
  font-size: 0.9rem;
`;

export const QualitiesContainer = styled.div`
  margin-bottom: 2.5rem;
`;

export const QualitiesHeading = styled.h3`
  color: #f5f5f5;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #64ffda, #3d84ff);
    border-radius: 3px;
  }
`;

export const QualitiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const QualityTag = styled.span`
  background: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }
`;

export const Quote = styled.blockquote`
  font-style: italic;
  color: rgba(255, 255, 255, 0.7);
  border-left: 3px solid rgba(100, 255, 218, 0.5);
  padding-left: 1rem;
  margin: 2rem 0;
  font-size: 1.2rem;
  line-height: 1.6;
`;

export const ProjectsSection = styled(Section)`
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
  color: white;
  padding: 6rem 2rem;
  min-height: auto;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: 1;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  color: white;
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #64ffda, #3d84ff);
    border-radius: 2px;
  }
`;

export const SkillsSection = styled(Section)`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f172a 100%);
  color: white;
  padding: 6rem 2rem;
  min-height: auto;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: 1;
  }
`;

export const SkillsContainer = styled.div`
  max-width: 1400px;
  margin: 2rem auto;
  padding: 2rem;
  position: relative;
  z-index: 2;
`;

export const SkillsRow = styled.div`
  display: flex;
  gap: 20rem;
  justify-content: center;
  margin-bottom: 3rem;
  
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
  font-size: 2rem;
  background: linear-gradient(45deg, #64ffda, #3d84ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #64ffda, #3d84ff);
    border-radius: 2px;
  }
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
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const SkillCardFront = styled(SkillCardFace)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const SkillCardBack = styled(SkillCardFace)`
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(61, 132, 255, 0.2));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  transform: rotateY(180deg);
`;

export const SkillIcon = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 8px rgba(100, 255, 218, 0.3));
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
  color: rgba(255, 255, 255, 0.8);
`;

export const SkillName = styled.h4`
  font-size: 1.4rem;
  background: linear-gradient(45deg, #64ffda, #3d84ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin: 0;
  padding: 0;
`;

export const SkillLevel = styled.div`
  width: 75%;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  margin-top: 2rem;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    width: ${props => props.level}%;
    height: 100%;
    background: linear-gradient(90deg, #64ffda, #3d84ff);
    border-radius: 3px;
    transition: width 1s ease-in-out;
  }
`;

export const ProjectsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  padding: 3rem 1rem;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #64ffda, #3d84ff);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
  
  @media (max-width: 768px) {
    padding: 2rem 0.1rem;
    margin-right: 8rem;
  }
`;

export const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: calc(50% - 100px);
  position: relative;
  margin: 2rem 0;
  
  ${props => props.position === 'left' ? `
    margin-right: auto;
    &::after {
      content: '';
      position: absolute;
      right: -3rem;
      top: 50%;
      width: 55px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #64ffda);
      transform: translateY(-50%);
    }
  ` : `
    margin-left: auto;
    &::after {
      content: '';
      position: absolute;
      left: -3rem;
      top: 50%;
      width: 55px;
      height: 2px;
      background: linear-gradient(90deg, #3d84ff, transparent);
      transform: translateY(-50%);
    }
  `}
  
  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: linear-gradient(90deg, #64ffda, #3d84ff);
    border: 4px solid #1a2a3a;
    border-radius: 50%;
    top: 50%;
    ${props => props.position === 'left' ? 'right: -4rem;' : 'left: -4rem;'}
    transform: translateY(-50%);
    z-index: 1;
    box-sizing: content-box;
  }
  
  &:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  }
  
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  @media (max-width: 768px) {
    width: calc(100% - 50px);
    margin-left: 40px;
    padding: 1.25rem;
    margin-bottom: 1.5rem;
    
    &::before {
      left: -35px;
      right: auto;
    }
    
    &::after {
      left: -35px;
      right: auto;
      width: 20px;
      top: 50%;
    }
  }
`;

export const ProjectTitle = styled.h3`
  background: linear-gradient(45deg, #64ffda, #3d84ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ProjectTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  background: rgba(255, 255, 255, 0.15);
  padding: 0.4rem 0.9rem;
  border-radius: 50px;
  font-size: 0.9rem;
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 0.3rem 0.7rem;
    font-size: 0.8rem;
  }
`;

export const ContactSection = styled(Section)`
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
  color: white;
  position: relative;
  overflow: hidden;
  padding: 6rem 2rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
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
    margin-right: 4rem;
    gap: 2rem;
  }
`;

export const ContactInfo = styled.div`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #64ffda, #3d84ff);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #64ffda, #3d84ff);
      border-radius: 2px;
    }
  }
  
  h4 {
    color: #f5f5f5;
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
  }
  
  p {
    margin: 0;
    color: #e0e0e0;
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
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  svg {
    min-width: 24px;
  }
`;

export const ContactLink = styled.a`
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s ease, transform 0.2s ease;
  position: relative;

  &:hover {
    color: #64ffda;
    transform: translateX(3px);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const ContactForm = styled.form`
  position: relative;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #64ffda, #3d84ff);
    border-radius: 22px;
    z-index: -1;
    opacity: 0.4;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
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
    border-color: #64ffda;
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.2);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  min-height: 150px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  resize: vertical;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
    border-color: #64ffda;
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.2);
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #64ffda, #3d84ff);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
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
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
  }
`;

export const ThankYouMessage = styled.div`
  margin-top: 2rem;
  opacity: 0.8;
`;

export const ScrollToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(90deg, #00c6ff 0%, #0072ff 100%);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 114, 255, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 114, 255, 0.5);
  }
`;