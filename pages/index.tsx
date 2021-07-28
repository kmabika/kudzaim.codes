import { GetStaticProps } from 'next';
import PageLayout from 'layout/PageLayout'
import {MetaInfoProps, HeroBannerType, ProjectsType, BlogPostsType} from "types/interfaces";
import {META_INFO, HERO_BANNER_TEXTS} from "assets/content";
import getAllProjects from 'lib/getProjects';
import getAllBlogPosts from 'lib/getBlogPosts';
import Hero from "components/Hero";
import ProjectsBanner from "components/Projects";
import PostsBanner from 'components/Posts';

interface Props{
    metaInfo: MetaInfoProps;
    heroTexts: HeroBannerType;
    projects: ProjectsType;
    blogPosts: BlogPostsType;
}


const HomePage = ({metaInfo, heroTexts, projects, blogPosts} : Props) => {
  return (
    <PageLayout
    image={metaInfo?.previewImage}
    title={metaInfo?.mainTitle}
    description={metaInfo?.description}>
    <Hero headline={heroTexts?.headline} paragraph={heroTexts?.paragraph} />
    <ProjectsBanner projects={projects}/>
    {/* <PostsBanner posts={blogPosts}/> */}
    </PageLayout>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const {projects} = await getAllProjects();
  const {blogPosts} = await getAllBlogPosts();
  return {
    props: {
      metaInfo: META_INFO,
      heroTexts: HERO_BANNER_TEXTS,
      projects,
      blogPosts,
    },
  };
};

export default HomePage;