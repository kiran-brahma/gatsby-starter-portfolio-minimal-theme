import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Kiran Brahma's Blog" />
      <Page>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog']} />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="about-blog" heading="Topics covered in this Blog" />
        <ContactSection sectionId="contact" heading="Contact Me" />
      </Page>
    </>
  );
}
