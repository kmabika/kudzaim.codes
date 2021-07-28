import graphcmsClient,{gql} from "./graphcms-client";
import { BlogPostCardFragment } from "./graphql-fragments";

export const getAllBlogPostsQuery = gql`
    {
        blogPosts {
            ...BlogPostCardFragment
        }
    }
    ${[BlogPostCardFragment]}
`;

async function getAllBlogPosts() {
    const  { blogPosts } = await graphcmsClient.request(getAllBlogPostsQuery);
    return {
        blogPosts
    }
}

export default getAllBlogPosts;