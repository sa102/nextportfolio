import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Hello there!,<br />
        I'm Saurav R.
        </SectionTitle>
        <SectionText>
        Someone who is enthusiastic of technology and other programming stuff, especially in the web programming field. Since I learned about programming, I finally have a dream to become a professional web developer who masters full stack front-end and back-end and data science on technology websites.
        </SectionText>
        <Button onClick={() => window.location = 'https://saurav-raj.vercel.app'}>Saurav R.</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;