import styled from 'styled-components';
import COLOUR from 'styles';

export const FooterContainer = styled.footer`
  padding: 100px 0;
  width: 100%;
  @media screen and (max-width: 510px) {
    padding: 50px 0;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1200px;
  width: calc(100% - 60px);
`;

export const FooterTextContent = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr 4fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin-top: 50px;
  width: 100%;
  @media screen and (max-width: 510px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterTextGroup = styled.div`
  width: 100%;
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: ${(props) => (props.color ? props.color : props.theme.text)};;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;

	@media screen and (max-width: 768px){
		justify-content: left;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`

export const SocialIconsContainer = styled.div`
max-width: 1040px;
display: flex;
justify-content: space-between;

@media screen and (max-width: 768px){
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 510px) {
  display: flex;
	width: 100%;
  flex-direction: column;
}
`