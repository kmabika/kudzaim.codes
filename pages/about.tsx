import { GetStaticProps } from 'next';
import PageLayout from 'layout/PageLayout';
import { MetaInfoProps, HeroBannerType, ExperienceProps } from 'types/interfaces';
import { META_INFO, ABOUT_BANNER_TEXTS , EXPERIENCES} from 'assets/content';
import Technologies from 'components/Technologies';
import ProgrammingLanguages from 'components/Technologies/languages';
import Tools from 'components/Technologies/tools';
import HeroBanner from 'components/HeroImage';
import ExperienceBanner from 'components/ExperienceBanner';

interface Props {
  metaInfo: MetaInfoProps;
  heroTexts: HeroBannerType;
  experiences: ExperienceProps[]
}

const HomePage = ({ metaInfo, heroTexts, experiences }: Props) => {
  return (
    <PageLayout
      image={metaInfo?.previewImage}
      title={metaInfo?.mainTitle}
      description={metaInfo?.description}
    >
      <HeroBanner heroTexts={heroTexts}/>
      {/* <ExperienceBanner experiences={experiences} /> */}
      <ProgrammingLanguages />
      <Technologies />
      <Tools />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metaInfo: META_INFO,
      heroTexts: ABOUT_BANNER_TEXTS,
      experiences: EXPERIENCES,
    },
  };
};

export default HomePage;
