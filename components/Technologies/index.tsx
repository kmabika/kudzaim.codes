import React from "react";
import { SiReact,SiLaravel, SiNextDotJs, SiGatsby, SiJava, SiGraphql} from "react-icons/si";
import { HeadlineWrapper, List, ListContainer, ListItem, ListParagraph, ListTitle,Icons } from "./styled";
import { Section, SectionDivider, SectionText, SectionTitle } from "components/GlobalComponents";
import Headline from "components/Headline";

const Technologies = () => (
    <Section id="tech">
      <HeadlineWrapper>
        <Headline typeHeadline="h2">Frameworks</Headline>
      </HeadlineWrapper>
      <SectionText>
      Here are a few frameworks I've been working with recently on the frontend and backend:
      </SectionText>
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
    </Section>
  );

  export default Technologies;