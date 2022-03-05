import { MetaInfoProps, HeroBannerType} from "types/interfaces";
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
  paragraph: `Hello! My name is Kudzai and I am a very curious and self-driven person with a big passion for web
  development in general.
  I graduated with my Bachelor's in Computer & Information Sciences with a concentration in Software
  Development & Computer Network Security.
  I'm also an AWS Certified Cloud Practitioner and AWS Certified Developer Associate.`,
};

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