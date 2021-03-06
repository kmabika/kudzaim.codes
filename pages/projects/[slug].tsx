import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import { useEffect } from 'react';
import { META_INFO } from 'assets/content';
import getAllProjectInternals  from 'graphql/getProjectsInternal';
import getAllProjects from 'graphql/getProjects';
import { MetaInfoProps,ProjectAllTypes,ProjectsType } from 'types/interfaces';
import ProjectLayout from 'layout/ProjectLayout';

interface Props {
    metaInfo: MetaInfoProps;
    project: ProjectAllTypes;
    isValid: boolean;
}

const ProjectPage =({metaInfo, project, isValid} : Props) => {
    const router = useRouter();
    useEffect(() => {
        if (!isValid) {
            router.push('/404');
        }
    },[]);

    return <ProjectLayout project={project} metaInfo={metaInfo} />
};

export const getStaticPaths: GetStaticPaths = async () => {
    const {projects} = await getAllProjects();

    const paths = Object.keys(projects)?.map((project ) => ({
        params: {slug: projects[project].slug}
    }));
    return {paths, fallback: false}   
};


export const getStaticProps: GetStaticProps = async (context) => {
    const { project } = await getAllProjectInternals({slug: context?.params?.slug});
    const metaInfo = META_INFO;
    if (project) {
        return{
            props: {
                metaInfo: metaInfo,
                project: project,
                isValid: true,
            }
        }
    } else {
        return {
            props: {
                metaInfo: metaInfo,
                project: {},
                isValid: false,
            }
        }
    }
};

export default ProjectPage;