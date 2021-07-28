import {gql} from "lib/graphcms-client";

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

export const BlogPostCardFragment = gql`
  fragment BlogPostCardFragment on BlogPost{
    id
    excerpt
    title
    mainColor
    slug
    tags
    cardImages {
      url
    }
  }
`