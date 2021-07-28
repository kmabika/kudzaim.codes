import styled from "styled-components";

export const HeroBannerWrapper = styled.div`
    padding-top: 50px;
    width: 100%;
`;

export const HeroBannerContent = styled.div`
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-column-gap: 30px;
    margin: auto;
    max-width: 1200px;
    padding-top: 100px;
    width: calc(100% - 60px);
    @media screen and (max-width: 700px){
        grid-template-columns: 1fr;
    }
`;

export const HeadlineHeroBanner = styled.div`
    grid-column: 2 / 11;
    width: 100%;
    .color {
        font-size: 1em;
        font-family: 'gilbert', sans-serif;
        transition: all ease 0.3s;
        position: relative;
        &::after {
            bottom: 0;
            content: ' ';
            background: linear-gradient(90deg, #454B1B	 25%, #088 50%, #000 75%, #454B1B	 100%);
            background-size: 200% auto;
            height: 3px;
            left: 0;
            margin: auto;
            width: 0%;
            opacity: 0;
            position: absolute;
            transition: all ease 0.3s;
            animation: shine 1s linear infinite;
        }
    }
    &:hover {
        .color {
            &::after {
                opacity: 1;
                transition: all ease 0.3s;
                width: 100%;
            }
        }
    }
    @media screen and (max-width: 700px) {
        grid-column: 1 / -1;
        .color {
            &::after {
                height: 2px;
                opacity: 1;
                transition: all ease 0.3s;
                width: 100%;
            }
        }
    }
    @keyframes shine{
        to {
            background-position: 200% center;
        }
    }
`;

export const HeroParagraphsWrapper = styled.div`
    grid-column: 2 / 11;
    padding-top: 60px;
    padding-bottom: 20px;
    width: 100%;
    @media screen and (max-width: 700px){
        grid-column: 1 / -1;
        grid-template-columns: 1fr;
        grid-row-gap: 30px;
        padding-top: 60px;
    }
`;

export const ScrollImage = styled.div`
    column-count: 1;
    column-gap: 30px;
    img {
        width: 150px;
        display: block;
    }
`;