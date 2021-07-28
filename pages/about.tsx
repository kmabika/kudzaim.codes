import { GetStaticProps } from 'next';
import PageLayout from 'layout/PageLayout'
import {MetaInfoProps , HeroBannerType} from "types/interfaces";
import {META_INFO, ABOUT_BANNER_TEXTS } from "assets/content";
import Technologies from "components/Technologies";
import ProgrammingLanguages from "components/Technologies/languages";
import Tools from "components/Technologies/tools";
import Hero from "components/Hero/aboutHero";

interface Props{
    metaInfo: MetaInfoProps;
    heroTexts: HeroBannerType;
}


const HomePage = ({ metaInfo, heroTexts } : Props) => {
  return (
    <PageLayout
    image={metaInfo?.previewImage}
    title={metaInfo?.mainTitle}
    description={metaInfo?.description}>
    <Hero 
    headline={heroTexts?.headline} 
    paragraph={heroTexts?.paragraph} 
    secondHeadline={heroTexts?.secondHeadline} 
    secondParagraph={heroTexts?.secondParagraph} />
    <ProgrammingLanguages/>
    <Technologies/>
    <Tools/>
    </PageLayout>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metaInfo: META_INFO,
      heroTexts: ABOUT_BANNER_TEXTS,
    },
  };
};

export default HomePage;