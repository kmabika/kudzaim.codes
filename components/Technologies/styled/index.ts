import styled from 'styled-components'
import COLOUR from "styles";


export const SkillsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 100px 48px 0 ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 768px) {
    padding: 50px 48px 0;
    flex-direction: column;
  }
  @media screen and (max-width: 640px) {
    padding: 50px 16px 0 ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }

`;


export const SkillsTitle = styled.p`
  max-width: 800px;
  font-size: 1em;
  line-height: 40px;
  font-weight: 600;
  padding-bottom: 3.6rem;
  color: ${(props) => (props.color ? props.color : props.theme.text)};

  @media screen and (max-width: 768px) {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const Icons = styled.a`
  transition: 0.3s ease;
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  border-radius: 50px;
  padding: 8px;
`;

export const ImageContainer = styled.div`
  text-align: center;
  background-image: ${COLOUR.blue_universe};
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media screen and (max-width: 768px) {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin: 0.8rem 0;
  @media screen and (max-width: 1024px){
    margin: 64px 0;
  }

  @media screen and (max-width: 768px){
    margin: 64px 0;
    gap: 24px
  }
  
  @media screen and (max-width: 640px){
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 640px){
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 1em;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  margin-bottom: 8px;

@media screen and (max-width: 768px){
  font-size: 24px;
  line-height: 28px;
}

@media screen and (max-width: 640px){
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p`
  font-size: 0.8em;
  font-weight: 600;
  line-height: 30px;
  color: ${(props) => (props.color ? props.color : props.theme.text)};

  @media screen and (max-width: 768px){
    font-size: 16px;
    line-height: 28px;
  }

  @media screen and (max-width: 640px){
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;

@media screen and (max-width: 768px){
  max-width: 203px;
}

@media screen and (max-width: 640px){
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media screen and (max-width: 768px){
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media screen and (max-width: 640px){
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`;


export const HeadlineWrapper = styled.div`
    grid-column: 1 / -1;
    margin-bottom: 20px;
    @media screen and (max-width: 750px) {
        margin-bottom: 10px;
    }
`;