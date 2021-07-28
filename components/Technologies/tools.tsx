import React from "react";
import { SiGit, SiGraphql, SiMysql, SiJest, SiPostgresql} from "react-icons/si";
import { List, ListContainer, ListItem, ListParagraph, ListTitle, HeadlineWrapper,Icons, SkillsWrapper, SkillsTitle} from "./styled";
import Headline from "components/Headline";


const Tools = () => (
    <SkillsWrapper>
      <HeadlineWrapper>
        <Headline typeHeadline="h2">Tools</Headline>
      </HeadlineWrapper>
      <SkillsTitle>
        I've worked with a range a technologies in the web development world. From
        Back-end To Design.
      </SkillsTitle>
      <List>
        <ListItem>
          <Icons>
            <SiGit size="3rem" />
          </Icons>
          <ListContainer>
            <ListTitle>Git</ListTitle>
            <ListParagraph>
              Experiece with <br />
              React.js.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <Icons>
            <SiGraphql size="3rem" />
          </Icons>
          <ListContainer>
            <ListTitle>GraphQL</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <Icons>
            <SiMysql size="3rem" />
          </Icons>
          <ListContainer>
            <ListTitle>MySQL</ListTitle>
            <ListParagraph>
              Experience with <br />
              tools like Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
            <Icons>
                <SiJest size="3rem" />
            </Icons>
            <ListContainer>
                <ListTitle>Jest</ListTitle>
                <ListParagraph>
                    JavaScript & TypeScript testing with Jest.
                </ListParagraph>
            </ListContainer>
        </ListItem>
        <ListItem>
            <Icons>
                <SiPostgresql size="3rem"/>
            </Icons>
            <ListContainer>
              <ListTitle> PostgreSQL </ListTitle>
              <ListParagraph>
                  Experience working with the PostgreSQL
              </ListParagraph>
            </ListContainer>
        </ListItem>
      </List>
    </SkillsWrapper>
  );

  export default Tools;