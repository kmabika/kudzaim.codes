import { ProjectMainType, ProjectsType } from "types/interfaces";
import { ProjectsWrapper, ProjectHeadlineWrapper, ProjectsContent } from "./styled";
import Headline from "components/Headline";
import ProjectCard from "components/ProjectCard";
import {handleGridRangeProject} from "utils";
import Paragraph from "components/Paragraph";
import COLOUR from "styles";

interface Props {
    projects: ProjectsType;
}

const ProjectsBanner = ({projects}: Props) => {
    return(
        <ProjectsWrapper id="projects">
            <ProjectsContent>
                <ProjectHeadlineWrapper>
                    <Headline typeHeadline="h2">Featured Projects</Headline>
                </ProjectHeadlineWrapper>
                {projects &&
                Object.entries(projects)?.map(
                   ([key,project] : [string, ProjectMainType], index: number) => {
                       const lengthProjects = Object?.entries(projects)?.length;
                       return(
                          <ProjectCard
                            client={project?.client}
                            gridRange={handleGridRangeProject(lengthProjects, index)}
                            slug={project?.slug}
                            skills={project?.skills}
                            cardImages={project?.cardImages}
                            key={`${key}-${index}`}
                            mainColor={project?.mainColor}
                            headline={project?.headline}
                          />
                       )
                   } 
                )}
                <ProjectHeadlineWrapper>
                    <Paragraph
                     highlightColor={COLOUR.blue_universe}
                     children={`<a href="https://github.com/kmabika" target="_blank" rel="noopener noreferrer" >View More Projects On GitHub 👉</a>`}
                     />
                </ProjectHeadlineWrapper>
            </ProjectsContent>
        </ProjectsWrapper>
    )
}

export default ProjectsBanner;