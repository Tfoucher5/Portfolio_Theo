import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ArrowUp } from 'lucide-react';
import {
  PageContainer,
  ScrollToTopButton,
  NavBar,
  NavContainer,
  ContactWrapper,
  LogoContainer,
  LogoText,
  LogoAccent,
  MobileMenuButton,
  MenuIcon,
  NavLinks,
  NavItem,
  NavLink,
  ContactButton,
  HomeSection,
  Grid,
  ColorCircle,
  TechBadge,
  Icon,
  AnimatedLine,
  ContentContainer,
  AboutSection,
  AboutCard,
  AboutContent,
  AboutDescription,
  AboutTitle,
  PassionsContainer,
  PassionHeading,
  PassionsList,
  PassionItem,
  PassionIcon,
  PassionText,
  QualitiesContainer,
  QualitiesHeading,
  QualitiesList,
  QualityTag,
  Quote,
  Particle,
  ProjectsSection,
  ProjectsContainer,
  ProjectCard,
  ProjectTitle,
  ProjectTags,
  Tag,
  ContactSection,
  ContactContainer,
  ContactInfo,
  ContactMethod,
  ContactForm,
  ContactLink,
  ThankYouMessage,
  Input,
  Textarea,
  Button,
  SkillsSection,
  SkillsContainer,
  SkillsCategoryTitle,
  SkillCard,
  SkillIcon,
  SkillDescription,
  SkillPeriod,
  SkillName,
  SkillCardInner,
  SkillCardBack,
  SkillCardFront,
  SkillLevel,
  SkillsRow,
  SkillsColumn,
  SkillsList,
  SectionTitle
} from '../styles/styles';

import emailjs from '@emailjs/browser';

const Portfolio = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [formStatus, setFormStatus] = useState({ show: false, success: false, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const formRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    let timer;
    if (formStatus.show) {
      timer = setTimeout(() => {
        setFormStatus({ show: false, success: false, message: '' });
      }, 5000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [formStatus.show]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset;
          if (scrollTop > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }

          // Détection de la section active pendant le défilement
          const sections = ["home", "about", "projects", "skills", "contact"];
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= 100 && rect.bottom >= 100) {
                setActiveLink(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {

      const result = await emailjs.sendForm(
        'service_k83ok4p',
        'template_7d4yg2r',
        formRef.current,
        'w6NDEY7NgIYKuy474'
      );

      if (result.text === 'OK') {
        setFormStatus({
          show: true,
          success: true,
          message: 'Message envoyé avec succès !'
        });

        nameRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
      } else {
        throw new Error('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setFormStatus({
        show: true,
        success: false,
        message: `Erreur: ${error.text || error.message || "Problème inconnu"}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const Notification = () => {
    if (!formStatus.show) return null;

    return (
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '5px',
        backgroundColor: formStatus.success ? '#4CAF50' : '#F44336',
        color: 'white',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        zIndex: 1000,
        animation: 'fadeIn 0.3s ease-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <span>{formStatus.message}</span>
        <button
          onClick={() => setFormStatus({ show: false, success: false, message: '' })}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            marginLeft: '15px',
            cursor: 'pointer',
            fontSize: '18px'
          }}
        >
          ×
        </button>
      </div>
    );
  };

  const skills = {
    languages: [
      {
        name: "PHP",
        level: 90,
        image: "/images/php-logo.png",
        description: "Appris lors de ma formation à l'Institut Informatique Appliquée. Utilisé principalement pour le développement backend.",
        period: "Depuis Octobre 2023"
      },
      {
        name: "HTML",
        level: 95,
        image: "/images/html-logo.png",
        description: "Base de tout développement web, maîtrisé à travers de nombreux projets personnels, scolaire et professionnels.",
        period: "Depuis Septembre 2023"
      },
      {
        name: "CSS",
        level: 85,
        image: "../images/css-logo.png",
        description: "Utilisé en parallèle avec HTML pour la création d'interfaces responsives et modernes.",
        period: "Depuis Septembre 2023"
      },
      {
        name: "JavaScript",
        level: 90,
        image: "/images/js-logo.png",
        description: "Langage principal pour le développement frontend et backend avec Node.js. Utilisé dans la plupart de mes projets.",
        period: "Depuis Décembre 2023"
      }
    ],
    frameworks: [
      {
        name: "Laravel",
        level: 85,
        image: "/images/laravel-logo.png",
        description: "Framework PHP utilisé pour le développement d'applications web complexes.",
        period: "Depuis Septembre 2024"
      },
      {
        name: "NodeJS",
        level: 80,
        image: "/images/nodejs-logo.png",
        description: "Utilisé pour créer des serveurs backend performants et des API REST.",
        period: "Depuis Juillet 2024"
      },
      {
        name: "ReactJS",
        level: 60,
        image: "/images/react-logo.png",
        description: "Framework principal pour le développement frontend. Utilisé dans de nombreux projets.",
        period: "Depuis Février 2025"
      },
      {
        name: "Angular",
        level: 75,
        image: "/images/angular-logo.png",
        description: "Appris et utilisé pour des projets spécifiques nécessitant une architecture robuste.",
        period: "Depuis Juillet 2024"
      }
    ]
  };

  // Fonction pour le défilement fluide
  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      setActiveLink(sectionId);
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Gestion du défilement fluide
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(href);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const projects = [
    
    {
      title: "Application Lourde de calcul du chemin le plus rapide a vol d'oiseau. | Mars 2025",
      description: "Application lourde permettant de calculer le chemin le plus rapide entre deux points en passant par plusieurs villes étapes (en France) à vol d'oiseau.",
      tags: ["C#", "HTML",  "CSS",  "JavaScript",  "Blazor", "Projet Scolaire"]
    },
    {
      title: "Bot Discord | Février 2025 ",
      description: "Bot pour l'application Discord, qui permet de jouer à un jeu de devinnettes de voitures. ",
      tags: ["Node.Js", "JavaScript", "Discord.js", "Projet Personnel"]
    },
    {
      title: "Application Web de gestion de Plannings | Décembre 2024 à Février 2025",
      description: "Une plateforme pour l'association Sportive USGPH, afin de gérer les plannings des salariés et faire les compte-rendus des heures travaillées.",
      tags: ["Laravel", "PHP", "HTML", "CSS", "JavaScript", "Projet Professionnel", "Réalisé en Stage"]
    },
    {
      title: "Refonte d'un outil excel en outil Web | Juin 2024 à Août 2024",
      description: "Création d'un des outils d'une Application Web pour LA POSTE, permettant de gérer les maintenances des différentes applications.",
      tags: ["Angular", "Node.Js", "Bootstrap", "Oracle", "Projet Professionnel", "Réalisé en Stage"]
    }
  ];

  const containerRef = useRef(null);

  // Effet pour l'animation au mouvement de la souris
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;

      const badges = container.querySelectorAll('.tech-badge');
      badges.forEach(badge => {
        const speedX = badge.getAttribute('data-speed-x');
        const speedY = badge.getAttribute('data-speed-y');
        badge.style.transform = `translate(${x * speedX}px, ${y * speedY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <PageContainer>
      <AnimatePresence>
        {showScrollButton && (
          <ScrollToTopButton
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </ScrollToTopButton>
        )}
      </AnimatePresence>
      <NavBar $scrolled={scrolled}>
        <NavContainer>
          <LogoContainer>
            <LogoText>Theo Foucher</LogoText>
            <LogoAccent>Développeur</LogoAccent>
          </LogoContainer>

          <MobileMenuButton aria-label="Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <MenuIcon open={mobileMenuOpen}>
              <span></span>
              <span></span>
              <span></span>
            </MenuIcon>
          </MobileMenuButton>

          <NavLinks $isOpen={mobileMenuOpen}>
            <NavItem>
              <NavLink
                href="#home"
                onClick={() => {
                  setActiveLink("home");
                  setMobileMenuOpen(false);
                }}
                $isActive={activeLink === "home"}
              >
                Accueil
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#about"
                onClick={() => {
                  setActiveLink("about");
                  setMobileMenuOpen(false);
                }}
                $isActive={activeLink === "about"}
              >
                Qui Suis-je ?
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#projects"
                onClick={() => {
                  setActiveLink("projects");
                  setMobileMenuOpen(false);
                }}
                $isActive={activeLink === "projects"}
              >
                Projets
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#skills"
                onClick={() => {
                  setActiveLink("skills");
                  setMobileMenuOpen(false);
                }}
                $isActive={activeLink === "skills"}
              >
                Compétences
              </NavLink>
            </NavItem>
            <NavItem>
              <ContactWrapper>
                <ContactButton
                  href="#contact"
                  onClick={() => {
                    setActiveLink("contact");
                    setMobileMenuOpen(false);
                  }}
                >
                  Contact
                </ContactButton>
              </ContactWrapper>
            </NavItem>
          </NavLinks>
        </NavContainer>
      </NavBar>

      <HomeSection id="home">
        {/* Grille d'arrière-plan */}
        <Grid />

        {/* Cercles colorés animés */}
        <ColorCircle
          style={{ background: '#4158D0', width: '300px', height: '300px', top: '-50px', right: '10%' }}
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut"
          }}
        />

        <ColorCircle
          style={{ background: '#0093E9', width: '400px', height: '400px', bottom: '-100px', left: '-50px' }}
          animate={{
            x: [0, -30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut"
          }}
        />

        <ColorCircle
          style={{ background: '#8EC5FC', width: '250px', height: '250px', top: '20%', left: '30%' }}
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
        />

        {/* Badges technologiques flottants */}
        <TechBadge
          className="tech-badge"
          data-speed-x="80"
          data-speed-y="50"
          style={{ top: '29%', right: '15%' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Icon color="#61DAFB">R</Icon>
          React
        </TechBadge>

        <TechBadge
          className="tech-badge"
          data-speed-x="-60"
          data-speed-y="-70"
          style={{ top: '20%', left: '15%' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <Icon color="#F7DF1E">JS</Icon>
          JavaScript
        </TechBadge>

        <TechBadge
          className="tech-badge"
          data-speed-x="90"
          data-speed-y="-40"
          style={{ bottom: '15%', left: '25%' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <Icon color="#3498db">L</Icon>
          Laravel
        </TechBadge>

        {/* Contenu principal */}
        <ContentContainer ref={containerRef}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            style={{ textAlign: 'center' }}
          >
            <motion.h1
              style={{
                fontSize: 'clamp(2.8rem, 8vw, 4.5rem)',
                fontWeight: 800,
                marginBottom: '0.5rem',
                background: 'linear-gradient(90deg, #ffffff, #88c8ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
              }}
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
            >
              Bienvenue sur mon portfolio
            </motion.h1>

            <AnimatedLine
              initial={{ width: 0 }}
              animate={{ width: '150px' }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            style={{ textAlign: 'center' }}
            transition={{ delay: 0.4 }}
          >
            <p style={{
              fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: 300,
              textShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
            }}>
              Je suis un développeur passionné par le code et la création d'applications innovantes
            </p>
          </motion.div>

          {/* boutons pour naviguer vers les sections */}
          <motion.div
            style={{ display: 'flex', gap: '20px', marginTop: '2.5rem' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 198, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                background: 'linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                fontWeight: 600,
                boxShadow: '0 10px 20px rgba(0, 114, 255, 0.3)'
              }}
            >
              Découvrir mes projets
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid white',
                borderRadius: '30px',
                cursor: 'pointer',
                fontWeight: 600,
                backdropFilter: 'blur(5px)'
              }}
            >
              Me contacter
            </motion.button>
          </motion.div>

          {/* Scroll pour explorer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            style={{
              position: 'absolute',
              top: '38rem',
              bottom: '30px',
              left: '50%', // Center horizontally
              transform: 'translateX(-50%)', // Ensure perfect centering
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              zIndex: 5 // Add z-index to ensure it's above other elements
            }}
          >
            <motion.p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
              Scroll pour explorer
            </motion.p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </motion.div>
        </ContentContainer>
      </HomeSection>

      <AboutSection id="about">
        {[...Array(20)].map((_, i) => (
          <Particle
            key={i}
            left={Math.random() * 100}
            top={Math.random() * 100}
            duration={Math.random() * 15 + 10}
          />
        ))}
        <AboutContent>
          <AboutTitle>Qui Suis-je ?</AboutTitle>
          <AboutCard>
            <AboutDescription>
              Je suis un développeur web passionné qui transforme des idées en expériences numériques captivantes. Mon aventure dans le monde du code a commencé en classe de seconde, lors d'un cours de SNT où la création d'une simple page HTML m'a ouvert les portes d'un univers de possibilités créatives. C'est cette sensation unique de voir le code prendre forme et donner vie à mes idées qui m'anime chaque jour.
            </AboutDescription>

            <PassionsContainer>
              <PassionHeading>Mes Passions</PassionHeading>
              <PassionsList>
                <PassionItem>
                  <PassionIcon>🚗</PassionIcon>
                  <PassionText>Automobile</PassionText>
                </PassionItem>
                <PassionItem>
                  <PassionIcon>🎵</PassionIcon>
                  <PassionText>Musique</PassionText>
                </PassionItem>
                <PassionItem>
                  <PassionIcon>🏃</PassionIcon>
                  <PassionText>Sport</PassionText>
                </PassionItem>
                <PassionItem>
                  <PassionIcon>💻</PassionIcon>
                  <PassionText>Développement</PassionText>
                </PassionItem>
              </PassionsList>
            </PassionsContainer>

            <QualitiesContainer>
              <QualitiesHeading>Mes Qualités</QualitiesHeading>
              <QualitiesList>
                <QualityTag>Créativité</QualityTag>
                <QualityTag>Autonomie</QualityTag>
                <QualityTag>Résolution de problèmes</QualityTag>
                <QualityTag>Adaptabilité</QualityTag>
                <QualityTag>Attention aux détails</QualityTag>
              </QualitiesList>
            </QualitiesContainer>

            <QualitiesContainer>
              <QualitiesHeading>Mon parcours scolaire</QualitiesHeading>
              <QualitiesList>
                <QualityTag>BTS SIO (en cours) | Institut Informatique Appliquée Saint-Nazaire(44)</QualityTag>
                <QualityTag>Baccalauréat Général | Notre Dame D'Espérance Saint-Nazaire(44)</QualityTag>
              </QualitiesList>
            </QualitiesContainer>
          </AboutCard>
        </AboutContent>
      </AboutSection>

      <ProjectsSection id="projects">
        <SectionTitle>Mes Projets</SectionTitle>
        <ProjectsContainer>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              position={index % 2 === 0 ? 'left' : 'right'}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <p>{project.description}</p>
              <ProjectTags>
                {project.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex}>{tag}</Tag>
                ))}
              </ProjectTags>
            </ProjectCard>
          ))}
        </ProjectsContainer>
      </ProjectsSection>

      <SkillsSection id="skills">
        <SectionTitle>Mes Compétences</SectionTitle>
        <SkillsContainer>
          <SkillsRow>
            <SkillsColumn>
              <SkillsCategoryTitle>Langages</SkillsCategoryTitle>
              <SkillsList>
                {skills.languages.map((skill, index) => (
                  <SkillCard
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SkillCardInner>
                      <SkillCardFront>
                        <SkillIcon src={skill.image} alt={skill.name} />
                        <SkillName>{skill.name}</SkillName>
                        <SkillLevel level={skill.level} />
                      </SkillCardFront>
                      <SkillCardBack>
                        <SkillDescription>{skill.description}</SkillDescription>
                        <SkillPeriod>{skill.period}</SkillPeriod>
                      </SkillCardBack>
                    </SkillCardInner>
                  </SkillCard>
                ))}
              </SkillsList>
            </SkillsColumn>

            <SkillsColumn>
              <SkillsCategoryTitle>Frameworks</SkillsCategoryTitle>
              <SkillsList>
                {skills.frameworks.map((skill, index) => (
                  <SkillCard
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SkillCardInner>
                      <SkillCardFront>
                        <SkillIcon src={skill.image} alt={skill.name} />
                        <SkillName>{skill.name}</SkillName>
                        <SkillLevel level={skill.level} />
                      </SkillCardFront>
                      <SkillCardBack>
                        <SkillDescription>{skill.description}</SkillDescription>
                        <SkillPeriod>{skill.period}</SkillPeriod>
                      </SkillCardBack>
                    </SkillCardInner>
                  </SkillCard>
                ))}
              </SkillsList>
            </SkillsColumn>
          </SkillsRow>
        </SkillsContainer>
      </SkillsSection>

      <ContactSection id="contact">
        <SectionTitle style={{ color: 'white' }}>Contactez-moi</SectionTitle>
        <ContactContainer>
          <ContactInfo>
            <h3>Mes Coordonnées</h3>
            <ContactMethod>
              <Mail />
              <div>
                <h4>Email</h4>
                <p>theonicolas.foucher@gmail.com</p>
              </div>
            </ContactMethod>
            <ContactMethod>
              <Phone />
              <div>
                <h4>Téléphone</h4>
                <p>+33 7 71 94 44 33</p>
              </div>
            </ContactMethod>
            <ContactMethod>
              <MapPin />
              <div>
                <h4>Localisation</h4>
                <p>Saint-Nazaire(44), France</p>
              </div>
            </ContactMethod>
            <ContactMethod>
              <Github />
              <div>
                <h4>Github</h4>
                <ContactLink href='https://github.com/TFoucher5' target="_blank">
                  github.com/TFoucher5 <ExternalLink size={18} />
                </ContactLink>
              </div>
            </ContactMethod>
            <ContactMethod>
              <Linkedin />
              <div>
                <h4>LinkedIn</h4>
                <ContactLink href='https://www.linkedin.com/in/theo-foucher-3956b52a0/' target="_blank">
                  linkedin.com/theo-foucher <ExternalLink size={18} />
                </ContactLink>
              </div>
            </ContactMethod>
          </ContactInfo>

          <ContactForm
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              name="user_name"
              placeholder="Votre nom"
              required
              ref={nameRef}
            />
            <Input
              type="email"
              name="user_email"
              placeholder="Votre email"
              required
              ref={emailRef}
            />
            <Textarea
              name="message"
              placeholder="Votre message"
              required
              ref={messageRef}
            />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </Button>
            <ThankYouMessage>
              <Quote>
                "Le code est comme une toile vierge où chaque ligne écrite est un coup de pinceau vers la création d'une œuvre numérique."
              </Quote>
            </ThankYouMessage>
          </ContactForm>
        </ContactContainer>
      </ContactSection>
      <Notification />
    </PageContainer>
  );
};

export default Portfolio;