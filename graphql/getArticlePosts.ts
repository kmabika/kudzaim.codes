import graphcmsClient,{gql} from "./graphcms-client";
import { ArticleCardFragment } from "./graphql-fragments";

export const getAllArticlesQuery = gql`
    {
        blogPosts {
            ...BlogPostCardFragment
        }
    }
    ${[ArticleCardFragment]}
`;

async function getAllBlogPosts() {
    const  { blogPosts } = await graphcmsClient.request(getAllArticlesQuery);
    return {
        blogPosts
    }
}

export default getAllBlogPosts;