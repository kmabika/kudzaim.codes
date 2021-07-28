import { MetaInfoProps, HeroBannerType} from "types/interfaces";
import { calculateAge } from "utils";

export const META_INFO: MetaInfoProps = {
    description:
      'An aspiring fullstack developer who has recently from with a Bachelor of Computer Science. Passionate about creating interactive applications and experiences on the web.',
    previewImage:
      'https://i.ibb.co/HhWjT67/preview-kudzai.png',
    mainTitle : 'Kudzai Mabika • Portfolio • Developer',
  };

export const HERO_BANNER_TEXTS: HeroBannerType = {
  headline: `Hey there, I'm <span class="color">Kudzai</span> 👋`,
  paragraph: `I'm an aspiring full stack developer who has recently graduated from  <a class="external-link" rel="noopener noreferrer" href="https://www.monash.edu/" target="_blank" title="Monash University">Monash University</a>
  with a Bachelor of Computer Science. I'm passionate about creating interactive applications and experiences on the web.`,
};

export const ABOUT_BANNER_TEXTS:HeroBannerType = {
  headline: `Hello, I'm Kudzai.`,
  paragraph: `As you might have guessed already, I'm Kudzai, a ${calculateAge()}-year-old Graduate Developer from Johanessburg, South Africa. I'm a Monash University graduate and software engineering enthusiast.`,
  secondHeadline: `Background`,
  secondParagraph: `I completed my Bachelor of Computer and Information Science  at Monash University, South Africa. 
  I'm currently seeking intern/junior developer positions and in my free time I freelance building web apps with React, Laravel, JamStack and many more tools.`,
}