import { useState, useEffect} from 'react';
import {FaDev, FaGithub, FaLinkedin} from 'react-icons/fa'
import COLOUR from 'styles';
import Headline from 'components/Headline';
import useDarkMode from 'use-dark-mode';
import Paragraph from 'components/Paragraph';
import { FooterContainer, FooterContent, FooterTextContent, SocialIcons, SocialContainer} from './styled';
import ThemeButton from "components/ThemeButton";
interface FooterProps {
  mainColor?: string;
}

const Footer = ({ mainColor = COLOUR.blue_universe }: FooterProps) => {
  const [onDarkMode, setOnDarkMode] = useState(false);
  const darkmode = useDarkMode();

  useEffect(() => {
    setOnDarkMode(darkmode.value);
  }, [darkmode]);

  return (
    <FooterContainer suppressHydrationWarning={true}>
      <FooterContent>
        <Headline typeHeadline="h3">Get in touch</Headline>
        <FooterTextContent>
          <Paragraph
            highlightColor={mainColor}
            children={`<a href="mailto:kdmab10@gmail.com" title="kdmab10@gmail.com" target="_blank" rel="noopener noreferrer">
              kdmab10@gmail.com
            </a>`}
          />
        <SocialContainer>
            <SocialIcons href="https://bit.ly/2TlC1kI" target="_blank" rel="noopener noreferrer">
              <FaGithub size="1.5rem" />
            </SocialIcons>
            <SocialIcons href="https://bit.ly/3iyK3zl" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="1.5rem" />
            </SocialIcons>
            <SocialIcons>
              <FaDev size="1.5rem"/>
            </SocialIcons>
          </SocialContainer>    
            <Paragraph
              highlightColor={mainColor}
              children={`<a href="https://github.com/kmabika/kmabika.github.io" target="_blank" rel="noopener noreferrer" >🍴 GitHub Repository.</a>`}
            />
        </FooterTextContent>
      </FooterContent>
      <ThemeButton callback={() => darkmode.toggle()} darkMode={onDarkMode}/>
    </FooterContainer>
  );
};

export default Footer;
