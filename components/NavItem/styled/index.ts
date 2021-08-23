import styled from "styled-components";
import { NavBarItemType } from "types/interfaces";
import COLOUR from "styles";

export const LinkTag = styled.a`
    text-decoration: none;
`;

export const Nav = styled.div<NavBarItemType>`
    color: ${COLOUR.blue_universe};
    cursor: none;
    font-size: 0.8rem;
    margin-left: 20px;
    &::after{
        border-bottom: 1px solid ${(props) => props?.highlightColor};
        bottom: -3px;
        content: '';
        display: block;
        margin: auto;
        opacity: 1;
        position: relative;
        transition: all ease 0.3s;
        width: 0%;
    }
    &:hover {
        color: ${(props) => props?.highlightColor};
        &::after{
            opacity: 1;
            transition: all ease 0.3s;
            width: 100%;
        }
    }
`;

const tag = (props: NavBarItemType) => (props.type === 'link' ? {as : 'a'} : {as : 'p'});

export const NavBarItemContainer = styled(Nav).attrs(tag)<NavBarItemType>`
    width: fit-content;
    svg {
    height: 20px;
    width: 20px;
    }
`