import { MetaInfoProps, HeroBannerType} from "types/interfaces";
import { calculateAge } from "utils";
import {ExperienceProps} from 'types/interfaces';

export const META_INFO: MetaInfoProps = {
    description:
      'An aspiring fullstack developer who has recently from with a Bachelor of Computer Science. Passionate about creating interactive applications and experiences on the web.',
    previewImage:
      'https://i.ibb.co/HhWjT67/preview-kudzai.png',
    mainTitle : 'Kudzai Mabika • Portfolio • Developer',
  };

export const HERO_BANNER_TEXTS: HeroBannerType = {
  headline: `Hey there, I'm Kudzai 👋`,
  paragraph: `A Bachelor of Computer and Information Science Graduate from <a class="external-link" rel="noopener 
  noreferrer" href="https://www.monash.edu/" target="_blank" title="Monash University">Monash University</a> 
  currently based in Johannesburg. I freelance specializing in creating interactive experiences and functional dynamic web applications 
  using React, GraphQL, and TypeScript.`,
};

export const ABOUT_BANNER_TEXTS:HeroBannerType = {
  headline: `Hello, I'm Kudzai.`,
  paragraph: `I'm Kudzai Mabika a ${calculateAge()}-year-old graduate and freelance developer currently living in Johannesburg, South Africa. An aspiring software engineer and techinal writer.`,
  secondHeadline: `Background`,
  secondParagraph: `I completed my Bachelor of Computer and Information Science majoring in Software Development and 
  Computer Network Security at Monash University, South Africa campus in 2020. During my degree my interest in developing secure and scalable applications grew through learning software engineering.
   </br></br>
   I'm currently seeking intern or junior developer positions where I can get to learn about both frontend and 
   backend development of enterprise applications.`,
}

export const EXPERIENCES: ExperienceProps[] = [
  {
    company: 'Monash South Africa',
    country: 'Ruimsig, Gauteng.',
    position: 'Academic Tutor.',
    description: 'Worked as a tutor for <a href="https://handbook.monash.edu/2020/units/FIT2093" target="_blank"> Cyber Security</a> at Monash University',
    years: {
      first: '03/2020',
      last: '11/2020',
    },
  },
];