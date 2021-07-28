import Link from "next/dist/client/link";
import Image from "next/image";
import COLOUR from "styles";
import Headline from "components/Headline";
import Paragraph from "components/Paragraph";
import { BlogPostMainType } from "types/interfaces";
import { BlogPostCardWrapper,BlogPostCoverImage,BlogPostCardTextWrapper, BlogPostTagsWrapper,BlogPostTagElement, BlogPostCoverWrapper} from "./styled";

export interface BlogPostCardComponentTypes {
    gridRange?: any[];
    background?: string;
    mainColor?: string;
}

type BlogPostCardType= BlogPostMainType & BlogPostCardComponentTypes;

const BlogPostCard = ({
    mainColor,
    title,
    excerpt,
    cardImages,
    tags,
    slug,
    gridRange
}: BlogPostCardType) => {
    return(
        <Link href={`posts/${slug}`} passHref>
            <BlogPostCardWrapper title={title} gridRange={gridRange}>
                <BlogPostCoverWrapper background={mainColor} gridRange={gridRange}>
                    <BlogPostCoverImage gridRange={gridRange}>
                    <Image
                        alt={title}
                        height={gridRange && gridRange[2] === 'big' ? 1091: 1000}
                        objectFit="cover"
                        objectPosition="top center"
                        quality={100}
                        src={
                            gridRange && gridRange[2] === 'big' ? cardImages[1]?.url : cardImages[0]?.url
                        }
                        width={gridRange && gridRange[2] === 'big' ? 1000 : 1139}
                        />
                    </BlogPostCoverImage>
                </BlogPostCoverWrapper>
                <BlogPostCardTextWrapper
                       background={
                        gridRange && gridRange[2] === 'big'
                        ? 'transparent'
                        : `${mainColor}11`
                    }
                    gridRange={gridRange}
                    mainColor={mainColor}   
                >
                      <Paragraph
                        children={title}
                        color={
                            gridRange && gridRange[2] === 'big'
                            ? COLOUR.white_cloud 
                            : mainColor
                        }
                    />
                       <br/>
                    <Headline
                        color={
                            gridRange && gridRange[2] === 'big'
                            ? COLOUR.white_cloud
                            : mainColor
                        }
                        typeHeadline="h3"
                        fontSize={30}
                    >
                        {excerpt}
                    </Headline>
                    <br/>
                    {tags && tags.length > 0 && (
                        <BlogPostTagsWrapper>
                            {tags.slice(0,2).map((tag: string, idx: number) => (
                                <BlogPostTagElement
                                mainColor={
                                    gridRange && gridRange[2] === 'big'
                                    ? COLOUR.white_cloud
                                    : mainColor
                                }
                                key={idx}
                                >
                                {tag}
                                </BlogPostTagElement>
                            ))}
                        </BlogPostTagsWrapper>
                    )}
                </BlogPostCardTextWrapper>
            </BlogPostCardWrapper>
        </Link>
    );
};

export default BlogPostCard;