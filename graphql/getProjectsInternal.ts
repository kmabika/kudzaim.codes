import graphcmsClient,{gql} from "./graphcms-client";
import { ProjectInternalFragment } from "./graphql-fragments";

export const getProjectInternalQuery = gql`
query ProjectsSlugQuery($slug: String!) {
  projects(where: { slug: $slug }) {
    ...ProjectInternalFragment
  }
}
      ${ProjectInternalFragment}
`;


async function getAllProjectInternals(slug: any) {
    const {projects: [project]} = await graphcmsClient.request(getProjectInternalQuery,slug);
    return {
        project
    }
}

export default getAllProjectInternals;