import styled from 'styled-components';
import {motion} from 'framer-motion'

export const HeroLayoutWrapper = styled.section`
  background: ${(props) => props.theme.background};
  width: 100%;
  @media screen and (max-width: 510px) {
    padding-bottom: 300px;
  }
`;

export const HeroLayoutMainBanner = styled.div`
  height: auto;
  padding-top: 150px;
  padding-bottom: 100px;
  width: 100%;
`;

export const HeroLayoutMainBannerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-column-gap: 50px;
  height: 100%;
  margin: auto;
  max-width: 1200px;
  width: calc(100% - 60px);
  @media screen and (max-width: 510px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroLayoutMainBannerTextContainer = styled.div`
  display: flex-wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  grid-column:  2 / 10;;
  height: 100%;
  h1 {
    font-weight: bolder;
  }
  @media screen and (max-width: 510px) {
    grid-column: 1 / -1;
    width: 100%;
  }
`;

export const HeroLayoutCoverImageContainer = styled(motion.div)`
  grid-column: 10 / -2;
  padding-top: 100px;
  position: relative;
  width: 100%;
  img {
    position: absolute;
    width: 300px;
    height: 323px;
    border-radius: 25px;
  }
  @media screen and (max-width: 510px) {
    grid-column: 1 / -1;
    padding-top: 0px;
    width: 100%;
  }
`;

