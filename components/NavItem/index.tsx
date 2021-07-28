import Link from "next/link";
import COLOUR from "styles";
import { NavBarItemType } from "types/interfaces";
import { NavBarItemContainer } from "./styled";

const NavItem = ({
    highlightColor = COLOUR.blue_universe, 
    label = 'Link',
    icon: Icon,
    route,
    isExternal,
    onClick,
    type,} : NavBarItemType) => {
    return type === 'link' ? (
        <Link href={`${route}`} passHref>
            <NavBarItemContainer
                highlightColor={highlightColor}
                type={type}
                target={isExternal ? '_blank' : '_self'}
            >
                {Icon ? <Icon /> : label}
            </NavBarItemContainer>
        </Link>
    ) : (
        <NavBarItemContainer
        highlightColor={highlightColor}
        type={type}
        onClick={onClick}
        >
            {Icon ? <Icon /> : label}
        </NavBarItemContainer>
    );
};

export default NavItem;