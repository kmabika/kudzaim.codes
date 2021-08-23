import React from "react";
import { SiGit, SiGraphql, SiMysql, SiJest} from "react-icons/si";
import { List, ListContainer, ListItem,ListTitle, HeadlineWrapper,Icons, SkillsWrapper, SkillsTitle, ListParagraph} from "./styled";
import Headline from "components/Headline";
import { Icon } from '@iconify/react';

const Tools = () => (
    <SkillsWrapper>
      <HeadlineWrapper>
        <Headline typeHeadline="h2">Tools</Headline>
      </HeadlineWrapper>
      <SkillsTitle>
      Here are a few tools I've been using in my programming workflow: 
      </SkillsTitle>
      <List>
        <ListItem>
          <Icons>
          <Icon icon="cib:git" height="48" />
          </Icons>
          <ListContainer>
            <ListTitle> Git </ListTitle>
          </ListContainer>
        </ListItem>
        <ListItem>
          <Icons>
          <Icon icon="logos:graphql" height="48" />
          </Icons>
          <ListContainer>
            <ListTitle>GraphQL</ListTitle>
          </ListContainer>
        </ListItem>
        <ListItem>
          <Icons>
          <Icon icon="logos:mysql" height={48}/>
          </Icons>
          <ListContainer>
            <ListTitle>MySQL</ListTitle>
          </ListContainer>
        </ListItem>
        <ListItem>
            <Icons>
            <Icon icon="simple-icons:cypress" height={48} />
            </Icons>
            <ListContainer>
                <ListTitle>Cypress</ListTitle>
                <ListParagraph>Currently learning E2E testing with cypress.</ListParagraph>
            </ListContainer>
        </ListItem>
      </List>
    </SkillsWrapper>
  );

  export default Tools;