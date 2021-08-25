import React from "react";
import { HeadlineWrapper, List, ListContainer, ListItem, SkillsWrapper, SkillsTitle,ListTitle,Icons, ListParagraph } from "./styled";
import Headline from "components/Headline";
import {Icon} from '@iconify/react';

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
            <Icon icon="logos:react" height="48" />
            </Icons>
            <ListContainer>
              <ListTitle>React</ListTitle>
            </ListContainer>
          </ListItem>
          <ListItem>
            <Icons>
            <Icon icon="logos:laravel" height="48" />
            </Icons>
            <ListContainer>
              <ListTitle>Laravel 8</ListTitle>
              <ListParagraph>
                Currently Learning Laravel 8.
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem>
            <Icons>
            <Icon icon="file-icons:nextjs" height="48" />
            </Icons>
            <ListContainer>
              <ListTitle>Next.Js</ListTitle>
            </ListContainer>
          </ListItem>
          <ListItem>
            <Icons>
            <Icon icon="logos:gatsby" height="48" />
            </Icons>
            <ListContainer>
              <ListTitle>Gatsby Js</ListTitle>
            </ListContainer>
          </ListItem>
        </List>
  </SkillsWrapper>
  );

  export default Technologies;