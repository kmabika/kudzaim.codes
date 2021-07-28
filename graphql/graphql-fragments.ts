import {gql} from "graphql/graphcms-client";

export const ProjectCardFragment = gql`
fragment ProjectCardFragment on Project{
    id
    client
    headline
    mainColor
    slug
    skills
    cardImages {
      url
    }
  }
`;
