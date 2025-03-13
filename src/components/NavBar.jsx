import React, { useState, useEffect } from 'react';
import {

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
} from '../styles/styles';

export default function NavBar() {
    // Logique de navigation intégrée directement
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
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
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (

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
    );
}