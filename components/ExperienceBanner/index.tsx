import { ExperienceProps } from "types/interfaces";
import ExperienceItem from "components/ExperiencedItem";
import Headline from "components/Headline";
import {
    ExperienceBannerContainer,
    ExperienceBannerContent,
    ExperiencesContainerHeadline,
    ExperiencesContainerList,
} from './styled'

interface Props {
    experiences: ExperienceProps[];
};

const ExperienceBanner = ({experiences}: Props) => {
    return(
        <ExperienceBannerContainer>
        <ExperienceBannerContent>
          <ExperiencesContainerHeadline>
            <Headline children="Experience" typeHeadline="h2" />
          </ExperiencesContainerHeadline>
          <ExperiencesContainerList>
            {experiences?.map((experience: ExperienceProps, index: number) => (
              <ExperienceItem
                key={index}
                company={experience?.company}
                description={experience?.description}
                country={experience?.country}
                years={experience?.years}
                position={experience?.position}
              />
            ))}
          </ExperiencesContainerList>
        </ExperienceBannerContent>
      </ExperienceBannerContainer>
    )
};

export default ExperienceBanner;