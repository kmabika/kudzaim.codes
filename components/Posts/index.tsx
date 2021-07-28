import Headline from "components/Headline";
import { PostHeadlineWrapper, PostsWrapper, PostsContent } from "./styled";
import { handleGridRangeProject } from "utils";
import {BlogPostMainType, BlogPostsType} from "types/interfaces";
import BlogPostCard from "components/PostCard";
import Paragraph from "components/Paragraph";
import COLOUR from "styles";

interface Props {
    posts: BlogPostsType;
}

const PostsBanner = ({posts}: Props) => {
    return(
        <PostsWrapper id="articles">
            <PostsContent>
                <PostHeadlineWrapper>
                    <Headline typeHeadline="h2">Featured Articles</Headline>
                </PostHeadlineWrapper>
                {posts && Object.entries(posts)?.map(
                    ([key,post] : [string, BlogPostMainType], index: number) =>{
                        const lengthPosts = Object.entries(posts)?.length;
                        return(
                            <BlogPostCard
                            title={post?.title}
                            gridRange={handleGridRangeProject(lengthPosts, index)}
                            tags={post?.tags}
                            cardImages={post?.cardImages}
                            key={`${key}-${index}`}
                            mainColor={post?.mainColor}
                            excerpt={post?.excerpt}
                            slug={post?.slug}
                            />
                        )
                    }
                )}
               <PostHeadlineWrapper>
                    <Paragraph
                    highlightColor={COLOUR.blue_universe}
                    children={`<a href="https://dev.to/kmabika" target="_blank" rel="noopener noreferrer" >View More Posts On Dev.to</a>`}
                    />
                </PostHeadlineWrapper>
            </PostsContent>
        </PostsWrapper>
    );
};

export default PostsBanner;