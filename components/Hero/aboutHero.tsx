import COLOUR from "styles";
import { HeroBannerType } from "types/interfaces";
import Headline from "components/Headline";
import Paragraph from "components/Paragraph";
import {
  HeadlineHeroBanner,
  HeroBannerWrapper,
  HeroBannerContent,
  HeroParagraphsWrapper,
} from "./styled";

const HeroBanner = ({
  headline,
  paragraph,
  secondParagraph,
  secondHeadline,
}: HeroBannerType) => {
  return (
    <HeroBannerWrapper>
      <HeroBannerContent>
        <HeadlineHeroBanner>
          <Headline fontSize={45} typeHeadline="h1">
            {headline}
          </Headline>
        </HeadlineHeroBanner>
        <HeroParagraphsWrapper>
          <Paragraph
            size={1}
            columns={1}
            children={paragraph}
            highlightColor={COLOUR.blue_sky}
          />
          <Paragraph
            size={1}
            columns={1}
            children={secondParagraph}
            highlightColor={COLOUR.blue_sky}
          />
        </HeroParagraphsWrapper>
      </HeroBannerContent>
    </HeroBannerWrapper>
  );
};

export default HeroBanner;
