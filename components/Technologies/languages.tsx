import React from "react";
import { SiTypescript, SiJavascript, SiJava, SiPhp } from "react-icons/si";
import { List, ListContainer, ListItem, ListParagraph, ListTitle, HeadlineWrapper,Icons} from "./styled";
import { Section, SectionText, SectionTitle } from "components/GlobalComponents";
import Headline from "components/Headline";
const ProgrammingLanguages = () => (
    <Section id="tech">
      <HeadlineWrapper>
        <Headline typeHeadline="h2">Programming Languages</Headline>
      </HeadlineWrapper>
      <SectionText>
      Here are a few programming languages I've been working with recently:
      </SectionText>
      <List>
        <ListItem>
          <Icons>
            <SiTypescript size="3rem" />
          </Icons>
          <ListContainer>
            <ListTitle>TypeScript</ListTitle>
          </ListContainer>
        </ListItem>
        <ListItem>
          <Icons>
            <SiJavascript size="3rem" />
          </Icons>
          <ListContainer>
            <ListTitle>JavaScript</ListTitle>
            <ListParagraph>
              ES6+
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <Icons>
            <SiJava size="3rem" />
          </Icons>
          <ListContainer>
            <ListTitle>Java 8</ListTitle>
            <ListParagraph>
              Java SE
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <Icons>
            <SiPhp size="3rem"/>
          </Icons>
          <ListContainer>
            <ListTitle>PHP 8</ListTitle>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );

  export default ProgrammingLanguages;