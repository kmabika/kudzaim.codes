import React from "react";
import { SiReact,SiLaravel, SiNextDotJs, SiGatsby} from "react-icons/si";
import { HeadlineWrapper, List, ListContainer, ListItem, SkillsWrapper, SkillsTitle,ListTitle,Icons } from "./styled";
import Headline from "components/Headline";

const Technologies = () => (
  <SkillsWrapper>
        <HeadlineWrapper>
          <Headline typeHeadline="h2">Frameworks</Headline>
        </HeadlineWrapper>
        <SkillsTitle>
        Here are a few frameworks & libraries I've been working with recently on the frontend and backend:
        </SkillsTitle>
        <List>
          <ListItem>
            <Icons>
              <SiReact size="3rem" />
            </Icons>
            <ListContainer>
              <ListTitle>React</ListTitle>
            </ListContainer>
          </ListItem>
          <ListItem>
            <Icons>
              <SiLaravel size="3rem" />
            </Icons>
            <ListContainer>
              <ListTitle>Laravel 8</ListTitle>
            </ListContainer>
          </ListItem>
          <ListItem>
            <Icons>
              <SiNextDotJs size="3rem" />
            </Icons>
            <ListContainer>
              <ListTitle>Next.Js</ListTitle>
            </ListContainer>
          </ListItem>
          <ListItem>
            <Icons>
              <SiGatsby size="3rem" />
            </Icons>
            <ListContainer>
              <ListTitle>Gatsby Js</ListTitle>
            </ListContainer>
          </ListItem>
        </List>
  </SkillsWrapper>
  );

  export default Technologies;