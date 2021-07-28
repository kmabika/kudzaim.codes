import Image from 'next/image';
import Link from 'next/link';
import COLOUR from "styles";
import Headline from "components/Headline";
import Paragraph from "components/Paragraph";
import { ProjectMainType } from 'types/interfaces';
import { ProjectCardWrapper, 
    ProjectCardCoverWrapper, 
    ProjectCardCoverImage,
    ProjectCardTextWrapper, 
    ProjectSkillsWrapper, 
    ProjectSkillElement,} from './styled';


export interface ProjectCardComponentTypes{
    gridRange?: any[];
    background?: string;
    mainColor?: string;
}

type ProjectCardType = ProjectMainType & ProjectCardComponentTypes;

const ProjectCard = ({
    mainColor,
    client,
    headline,
    slug,
    skills,
    cardImages,
    gridRange,
}: ProjectCardType) => {
    return(
        <Link href={`projects/${slug}`} passHref>
            <ProjectCardWrapper title={client} gridRange={gridRange}>
                <ProjectCardCoverWrapper background={mainColor} gridRange={gridRange} >
                    <ProjectCardCoverImage gridRange={gridRange}>
                        <Image
                        alt={client}
                        height={gridRange && gridRange[2] === 'big' ? 1091: 1000}
                        objectFit="cover"
                        objectPosition="top center"
                        quality={100}
                        src={
                            gridRange && gridRange[2] === 'big' ? cardImages[1].url : cardImages[0].url
                        }
                        width={gridRange && gridRange[2] === 'big' ? 1000 : 1139}
                        />
                    </ProjectCardCoverImage>
                </ProjectCardCoverWrapper>
                <ProjectCardTextWrapper
                background={
                    gridRange && gridRange[2] === 'big'
                    ? 'transparent'
                    : `${mainColor}11`
                }
                gridRange={gridRange}
                mainColor={mainColor}   
                >
                    <Paragraph
                        children={client}
                        color={
                            gridRange && gridRange[2] === 'big'
                            ? COLOUR.white_cloud 
                            : mainColor
                        }
                    />
                    <br/>
                    <Headline
                        color={
                            gridRange && gridRange[2] === 'big'
                            ? COLOUR.white_cloud
                            : mainColor
                        }
                        typeHeadline="h3"
                        fontSize={30}
                    >
                        {headline}
                    </Headline>
                    <br/>
                    {skills && skills.length > 0 && (
                        <ProjectSkillsWrapper>
                        {skills.slice(0, 2).map((skill: string, idx: number) => (
                            <ProjectSkillElement
                            mainColor={
                                gridRange && gridRange[2] === 'big'
                                ? COLOUR.white_cloud
                                : mainColor
                            }
                            key={idx}
                            >
                            {skill}
                            </ProjectSkillElement>
                        ))}
                        </ProjectSkillsWrapper>
                    )}
                </ProjectCardTextWrapper>
            </ProjectCardWrapper>
        </Link>
    );
};

export default ProjectCard;