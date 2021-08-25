import React from "react";
import { List, ListContainer, ListItem, ListParagraph, ListTitle, HeadlineWrapper,Icons, SkillsWrapper, SkillsTitle} from "./styled";
import Headline from "components/Headline";
import {Icon} from '@iconify/react';

const ProgrammingLanguages = () => (
    <SkillsWrapper id="tech">
      <HeadlineWrapper>
        <Headline typeHeadline="h2">Programming Languages</Headline>
      </HeadlineWrapper>
      <SkillsTitle>
        Here are a few programming languages I've been working with recently, I've been using and learning TypeScript to writing typed JavaScript & Java for backend development.
      </SkillsTitle>
      <List>
        <ListItem>
          <Icons>
          <Icon icon="logos:typescript-icon" height="48" />
          </Icons>
          <ListContainer>
            <ListTitle>TypeScript</ListTitle>
            <ListParagraph>
              Good understanding of TypeScript and the benefits a strongly typed JavaScript.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <Icons>
          <Icon icon="logos:javascript" height="48" />
          </Icons>
          <ListContainer>
            <ListTitle>JavaScript</ListTitle>
            <ListParagraph>
              ES6 and basic understanding of ES2020 features.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <Icons>
          <Icon icon="logos:java" height="48" />
          </Icons>
          <ListContainer>
            <ListTitle>Java 8</ListTitle>
            <ListParagraph>
              Java SE
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </SkillsWrapper>
  );

  export default ProgrammingLanguages;