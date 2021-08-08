import React from "react";
import { SiTypescript, SiJavascript, SiJava, SiPhp } from "react-icons/si";
import { List, ListContainer, ListItem, ListParagraph, ListTitle, HeadlineWrapper,Icons, SkillsWrapper, SkillsTitle} from "./styled";
import Headline from "components/Headline";
const ProgrammingLanguages = () => (
    <SkillsWrapper id="tech">
      <HeadlineWrapper>
        <Headline typeHeadline="h2">Programming Languages</Headline>
      </HeadlineWrapper>
      <SkillsTitle>
      Here are a few programming languages I've been working with recently:
      </SkillsTitle>
      <List>
        <ListItem>
          <Icons>
            <SiTypescript size="3rem" />
          </Icons>
          <ListContainer>
            <ListTitle>TypeScript</ListTitle>
            <ListParagraph>
              Familiar with
            </ListParagraph>
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
            <ListParagraph>
              Basic understanding of PHP concepts.
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </SkillsWrapper>
  );

  export default ProgrammingLanguages;