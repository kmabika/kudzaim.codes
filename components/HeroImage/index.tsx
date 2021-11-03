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
  

  const postWhileHover = {
    position: 'relative',
    zIndex: 1,
    background: 'white',
    scale: [1, 1.4, 1.2],
    rotate: [0, 10, -10, 0],
    filter: [
      'hue-rotate(0) contrast(100%)',
      'hue-rotate(360deg) contrast(200%)',
      'hue-rotate(45deg) contrast(300%)',
      'hue-rotate(0) contrast(100%)'],
    transition: {
      duration: .2
    }
  }
  
  const postVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: .9
    },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: .4
      }
    }
  };

  const postMotionProps = {
    initial: 'initial',
    animate: 'enter',
    variants: postVariants,
    hover: postWhileHover,
  }

  

  
  const AboutHeroBanner = ({heroTexts}: Props) => {

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
          <HeroLayoutCoverImageContainer 
          initial='initial'
          animate="enter"
          whileHover={{
          scale: [1, 1.4, 1.2],
          rotate: [0, 10, -10, 0],
          filter: [
            'hue-rotate(0) contrast(100%)',
            'hue-rotate(360deg) contrast(200%)',
            'hue-rotate(45deg) contrast(300%)',
            'hue-rotate(0) contrast(100%)'],
          transition: {
            duration: .2
          }}}>
          <img src={'/images/grad-image.png'} alt="Grad Image Kudzai Mabika" />
          </HeroLayoutCoverImageContainer>
        </HeroLayoutMainBannerContent>
      </HeroLayoutMainBanner>
    </HeroLayoutWrapper>
    )
};

export default AboutHeroBanner;