import graphcmsClient,{gql} from "./graphcms-client";
import { ProjectCardFragment } from "./graphql-fragments";

export const getAllProjectsQuery = gql`
      {
        projects {
          ...ProjectCardFragment
        }
      }
      ${ProjectCardFragment}
`;


async function getAllProjects() {
    const { projects } = await graphcmsClient.request(getAllProjectsQuery);
    return {
        projects
    }
}

export default getAllProjects;