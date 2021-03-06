import Image from 'next/image';
import { HandleAlignment } from 'utils';
import { ProjectSectionType } from 'types/interfaces';
import Headline from 'components/Headline';
import Paragraph from 'components/Paragraph';
import {
  ProjectSectionContainer,
  ProjectSectionContent,
  ProjectSectionTexts,
  ProjectSectionImage,
} from './styled';

const ProjectSection = ({
  alignment,
  content,
  columns,
  image,
  mainColor,
  marginBottom,
  maxWidth,
  title,
}: ProjectSectionType) => {
  return (
    <ProjectSectionContainer marginBottom={marginBottom}>
      <ProjectSectionContent alignment={alignment} maxWidth={maxWidth}>
        {image &&
          (HandleAlignment(`${alignment}`).position === 'left' ||
            HandleAlignment(`${alignment}`).position === 'up') && (
            <ProjectSectionImage alignment={alignment}>
              <Image
                src={image.url as any}
                width={image.width}
                height={image.height}
                objectFit="cover"
                priority={image.priority}
                quality={100}
                layout="responsive"
              />
            </ProjectSectionImage>
          )}
        <ProjectSectionTexts alignment={alignment}>
          {title && (
            <>
              <Headline color={mainColor} typeHeadline="h3" children={title} />
              <br />
            </>
          )}
          <Paragraph columns={columns} children={content} />
        </ProjectSectionTexts>
        {image &&
          (HandleAlignment(`${alignment}`).position === 'right' ||
            HandleAlignment(`${alignment}`).position === 'bottom') && (
            <ProjectSectionImage alignment={alignment}>
              <Image
                src={image.url as any}
                width={image.width}
                height={image.height}
                objectFit="cover"
                priority={image.priority}
                quality={100}
                layout="responsive"
              />
            </ProjectSectionImage>
          )}
      </ProjectSectionContent>
    </ProjectSectionContainer>
  );
};

export default ProjectSection;
