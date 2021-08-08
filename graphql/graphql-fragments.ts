import { gql } from 'graphql/graphcms-client';

export const ImageFragment = gql `
  fragment ImageFragment on Asset {
    url,
    height,
    width
  }
`;

export const CoreProjectDetails = gql`
  fragment CoreProjectDetails on Project {
    id
    client
    mainColor
    headline
  }
`;



export const ProjectCardFragment = gql`
  fragment ProjectCardFragment on Project {
    ...CoreProjectDetails
    slug
    skills
    cardImages {
      ...ImageFragment
    }
  }
  ${ImageFragment}
  ${CoreProjectDetails}
`;


export const ProjectInternalFragment = gql`
  fragment ProjectInternalFragment on Project {
    ...CoreProjectDetails
    myRole
    overview
    firstYear
    lastYear
    projectLink
    sections{
      alignment
      content
      title
      image{
          ...ImageFragment
      }
    }
    conclusion{
      content
      image{
          ...ImageFragment
      }
    }
    coverImage{
      ...ImageFragment
    }
    sliderImages{
      ...ImageFragment
    }
    previewImage{
      ...ImageFragment
    }
  }
  ${ImageFragment}
  ${CoreProjectDetails}
`;
