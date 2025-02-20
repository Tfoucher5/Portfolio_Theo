// Portfolio.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import {
  PageContainer,
  NavBar,
  NavLinks,
  HomeSection,
  AboutSection,
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
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillInfo,
  SkillDescription,
  SkillPeriod,
  SkillName,
  SkillCardInner,
  SkillCardBack,
  SkillCardFace,
  SkillCardFront,
  SkillLevel,
  SkillsRow,
  SkillsColumn,
  SkillsList,
  SectionTitle
} from '../styles/styles';

const Portfolio = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const skills = {
    languages: [
      {
        name: "PHP",
        level: 90,
        image: "/images/php-logo.png", // Assurez-vous d'avoir ces images dans votre dossier public
        description: "Appris lors de ma formation à l'école 42. Utilisé principalement pour le développement backend et les API REST.",
        period: "Depuis 2020"
      },
      {
        name: "HTML",
        level: 95,
        image: "/images/html-logo.png",
        description: "Base de tout développement web, maîtrisé à travers de nombreux projets personnels, scolaire et professionnels.",
        period: "Depuis 2023"
      },
      {
        name: "CSS",
        level: 85,
        image: "../images/css-logo.png",
        description: "Utilisé en parallèle avec HTML pour la création d'interfaces responsives et modernes.",
        period: "Depuis 2019"
      },
      {
        name: "JavaScript",
        level: 90,
        image: "/images/js-logo.png",
        description: "Langage principal pour le développement frontend et backend avec Node.js. Utilisé quotidiennement.",
        period: "Depuis 2019"
      }
    ],
    frameworks: [
      {
        name: "Laravel",
        level: 85,
        image: "/images/laravel-logo.png",
        description: "Framework PHP utilisé pour le développement d'applications web complexes.",
        period: "Depuis 2021"
      },
      {
        name: "NodeJS",
        level: 80,
        image: "/images/nodejs-logo.png",
        description: "Utilisé pour créer des serveurs backend performants et des API REST.",
        period: "Depuis 2020"
      },
      {
        name: "ReactJS",
        level: 90,
        image: "/images/react-logo.png",
        description: "Framework principal pour le développement frontend. Utilisé dans de nombreux projets.",
        period: "Depuis 2020"
      },
      {
        name: "Angular",
        level: 75,
        image: "/images/angular-logo.png",
        description: "Appris et utilisé pour des projets spécifiques nécessitant une architecture robuste.",
        period: "Depuis 2021"
      }
    ]
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message envoyé:', { email, message });
    setMessage('');
    setEmail('');
  };

  const projects = [
    {
      title: "Application E-commerce",
      description: "Une plateforme de vente en ligne complète avec panier d'achat et paiement sécurisé.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Dashboard Analytics",
      description: "Interface d'administration pour visualiser et analyser les données en temps réel.",
      tags: ["Vue.js", "D3.js", "Firebase", "TypeScript"]
    },
    {
      title: "Application Mobile",
      description: "Application mobile cross-platform pour la gestion de tâches et la productivité.",
      tags: ["React Native", "Redux", "Node.js", "MongoDB"]
    },
    {
      title: "Plateforme de Blog",
      description: "CMS personnalisé avec éditeur WYSIWYG et système de commentaires.",
      tags: ["Next.js", "GraphQL", "PostgreSQL", "AWS"]
    },
    {
      title: "Portfolio Photographe",
      description: "Site vitrine avec galerie photos et système de réservation.",
      tags: ["React", "Gatsby", "Contentful", "Netlify"]
    },
    {
      title: "API REST",
      description: "API sécurisée pour la gestion de données avec documentation complète.",
      tags: ["Node.js", "Express", "MongoDB", "JWT"]
    }
  ];

  return (
    <PageContainer>
      <NavBar>
        <h1 style={{ color: 'white', margin: 0 }}>Theo Foucher</h1>
        <NavLinks>
          <a href="#home">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </NavLinks>
      </NavBar>

      <HomeSection id="home">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Bienvenue sur mon portfolio
          </h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            Je suis un développeur web passionné par le code et la création d'applications innovantes
          </p>
        </motion.div>
      </HomeSection>

      <AboutSection id="about">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>À propos de moi</h2>
          <p>
            Je suis un développeur web passionné par la création d'applications et d'expériences interactives.
            Mon expertise couvre l'ensemble du stack de développement, de la conception à la mise en production.
          </p>
        </motion.div>
      </AboutSection>

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

      <ProjectsSection id="projects">
        <h2>Mes Projets</h2>
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

          <ContactForm onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Votre nom"
              required
            />
            <Input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              placeholder="Votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button type="submit">
              Envoyer le message
            </Button>
            <ThankYouMessage>
              Merci d’avoir pris le temps de visiter mon portfolio et de me contacter si vous avez des questions.
              J’ai hâte d’échanger avec vous !
            </ThankYouMessage>
          </ContactForm>
        </ContactContainer>
      </ContactSection>
    </PageContainer>
  );
};

export default Portfolio;