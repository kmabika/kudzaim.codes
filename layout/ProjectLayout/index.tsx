import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import COLOUR from 'styles';
import Footer from 'components/Footer';
import HeadTags from 'components/Header';
import NavBar from 'components/NavBar';
import Headline from 'components/Headline';
import Paragraph from 'components/Paragraph';
import {
  MetaInfoProps,
  ProjectAllTypes,
  ProjectSectionType,
} from 'types/interfaces';
import useDarkMode from 'use-dark-mode';
import Slider from 'components/Slider';
import Image from 'next/image'
import {
  ProjectFooter,
  ProjectLayoutContainer,
  ProjectLayoutCoverImageContainer,
  ProjectLayoutMainBanner,
  ProjectLayoutMainBannerContent,
  ProjectLayoutMainBannerTextContainer,
  ProjectRoleBanner,
  ProjectRoleBannerContent,
  ProjectRoleTextBoxes,
  ProjectSliderContainer,
  ProjectSliderContent,
} from './styled';
import ProjectSection from 'components/ProjectSection';

interface Props {
  metaInfo: MetaInfoProps;
  project: ProjectAllTypes;
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const ProjectLayout = ({ metaInfo, project }: Props) => {
  const [currentURL, setCurrentURL] = useState<string>(
    'https://kudzaim.codes/'
  );
  const router = useRouter();
  const darkmode = useDarkMode();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentURL(
        `${window.location.protocol}//${window.location.host}${window.location.pathname}`
      );
    }
  }, []);

  return (
    <ProjectLayoutContainer
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
    >
      <HeadTags
        title={`${project.client}: ${project.headline} • ${metaInfo?.mainTitle}`}
        description={project.headline}
        locale={`${router.locale}`}
        currentUrl={currentURL}
        image={project.previewImage?.url!}
        mainColor={project.mainColor}
      />
      <NavBar bgColor={project.mainColor} />
      <ProjectLayoutMainBanner background={project.mainColor}>
        <ProjectLayoutMainBannerContent>
          <ProjectLayoutMainBannerTextContainer>
            <Paragraph color={COLOUR.white_cloud} children={project.client} />
            <br />
            <Headline
              color={COLOUR.white_cloud}
              typeHeadline="h5"
              fontSize={50}
            >
              {project.headline}
            </Headline>
            <br />
            {project.projectLink && (
              <Paragraph
                color={COLOUR.white_cloud}
                highlightColor={COLOUR.white_dark}
                children={`<a href="${project.projectLink}" target="_blank" rel="noopener noreferrer" > View Website > </a>`}
              />
            )}
            <br />
          </ProjectLayoutMainBannerTextContainer>
          <ProjectLayoutCoverImageContainer>
            <img src={project.coverImage?.url!} alt={project.client} />
          </ProjectLayoutCoverImageContainer>
        </ProjectLayoutMainBannerContent>
      </ProjectLayoutMainBanner>

      <ProjectRoleBanner>
        <ProjectRoleBannerContent>
          <ProjectRoleTextBoxes>
            <Headline typeHeadline="h3" color={project.mainColor}>
              Role
            </Headline>
            <br />
            <Paragraph children={project.myRole} />
          </ProjectRoleTextBoxes>
        </ProjectRoleBannerContent>
      </ProjectRoleBanner>

      <ProjectSliderContainer>
        <ProjectSliderContent>
          <Slider
            mainColor={project.mainColor}
            slides={project?.sliderImages!}
          />
        </ProjectSliderContent>
      </ProjectSliderContainer>

      <ProjectSection
        alignment="mid-up"
        title="Overview"
        content={project.overview}
        columns={1}
        mainColor={project.mainColor}
      />

      {project.sections &&
        Object.entries(project.sections)?.map(
          ([key, section]: [string, ProjectSectionType], index: number) => {
            return (
              <ProjectSection
                alignment={section.alignment}
                columns={1}
                content={section.content}
                image={section.image}
                key={`${key}-${index}`}
                mainColor={project.mainColor}
                marginBottom={section.marginBottom}
                title={section.title}
              />
            );
          }
        )}

      {project.conclusion && project.conclusion?.content && (
        <ProjectSection
          alignment="wide-bottom"
          image={project.conclusion?.image}
          title={'Conclusion'}
          content={project.conclusion?.content}
          columns={1}
          mainColor={project.mainColor}
        />
      )}

      <ProjectFooter>
        <Paragraph
          color={`${
            darkmode.value ? COLOUR.white_dark : COLOUR.blue_universe
          }55`}
          size={0.9}
          children={`© ${
            project?.firstYear !== new Date()?.getFullYear()
              ? `${project.years?.first} - `
              : ''
          }${new Date()?.getFullYear()}.All rights reserved - ${
            project.client
          }.`}
        />
      </ProjectFooter>
      <Footer mainColor={project.mainColor} />
    </ProjectLayoutContainer>
  );
};

export default ProjectLayout;
