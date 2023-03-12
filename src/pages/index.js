import React from 'react';
import './theme.css';
import Tabs from '../components/Tabs';
import InterestsSection from '../sections/Interests';
import {
  AboutSection,
  ContactSection,
  HeroSection,
  Page,
  ProjectsSection,
  Section,
  Seo
} from "gatsby-theme-portfolio-minimal";


export default function IndexPage() {
  return (
    <>
      <Seo title="Joseph Bienvenu" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" anchor="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <Section heading="My Design Portfolio" anchor="portfolio" /><div id="portdiv"><Tabs/></div>
        <ProjectsSection sectionId="writing" heading="Writing" anchor="writing" />
        <InterestsSection sectionId="details" heading="My Poetry & Translations Online" />
        <ContactSection sectionId="github" heading="Get in Touch?" />
      </Page>
    </>
  );
}
