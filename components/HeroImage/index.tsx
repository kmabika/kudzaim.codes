import Headline from 'components/Headline';
import Paragraph from 'components/Paragraph';
import { HeroBannerType } from 'types/interfaces';
import {
    HeroLayoutWrapper,
    HeroLayoutCoverImageContainer,
    HeroLayoutMainBanner,
    HeroLayoutMainBannerContent,
    HeroLayoutMainBannerTextContainer,
  } from './styled';


  interface Props {
    heroTexts: HeroBannerType;
  }
  
  const HeroImage = ({heroTexts}: Props) => {

    return(
      <HeroLayoutWrapper>
      <HeroLayoutMainBanner >
        <HeroLayoutMainBannerContent>
          <HeroLayoutMainBannerTextContainer>
          <Headline typeHeadline="h1" fontSize={50}>
              {heroTexts.headline}
            </Headline>
            <br />
            <Paragraph  children={heroTexts.paragraph} />
            <br />
            <Headline typeHeadline="h3" fontSize={30}>
              {heroTexts.secondHeadline}
            </Headline>
            <br/>
            <Paragraph children={heroTexts.secondParagraph} size={0.8}/>
          </HeroLayoutMainBannerTextContainer>
          <HeroLayoutCoverImageContainer>
          <img src={'/images/Asset 2.png'} alt="Grad Image Kudzai Mabika" />
          </HeroLayoutCoverImageContainer>
        </HeroLayoutMainBannerContent>
      </HeroLayoutMainBanner>
    </HeroLayoutWrapper>
    )
};

export default HeroImage;