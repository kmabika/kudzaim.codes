import { ReactNode } from 'react';

export interface PageLayoutTypes{
    children: ReactNode;
    title: string;
    description?: string;
    image?: string;
}

export interface HeadTagProps{
    title: string;
    description: string;
    image?: string;
    currentUrl?: string;
    locale?: string;
    mainColor?: string;
}

export interface HeaderTypes{
    bgColor?: string;
    scrollTop?: number;
    limitScroll?: number;
    isOpen?: boolean;
}


export interface ImageInterface {
    height?: number;
    url: string;
    width?: number;
    priority?: boolean;
}

export interface NavBarItemType{
    icon?: any;
    label?: string;
    highlightColor?: string;
    isExternal?: boolean;
    onClick?: any;
    target?: any;
    type: string;
    route?: string | undefined;
}

export interface HeroParagraphType{
    color?: string;
    columns?: number;
    highlightColor?: string;
    size?: number;
    children?: any;
}

export interface PageLayoutType{
    children: ReactNode;
    title: string;
    description?: string;
    image?: string;
}

export interface MetaInfoProps{
    previewImage: string;
    mainTitle: string;
    description: string; 
}


export interface ThemeMode {
    darkMode: boolean;
    callback: () => void;
  }


export interface HeadlineType {
    children?: string;
    color?: string;
    fontSize?: number;
    fontWeight?: number;
    typeHeadline: string;
  }

export interface HeroBannerType{
    headline: string;
    paragraph: string;
    secondHeadline?: string;
    secondParagraph?: string;
    mainColor?: string;
    profileImage?: string;
} 

export interface ProjectMainType{
    client: string;
    headline: string;
    mainColor: string;
    coverImage?: ImageInterface;
    cardImages: ImageInterface[];
    previewImage?: ImageInterface;
    skills: string[];
    slug: string;
    firstYear?: number;
    lastYear?:string;
    years?: YearsTypes;
    sliderImages?: ImageInterface[];
    smallImages?: ImageInterface[];
}


type AlignementTypes =
  | 'wide-up'
  | 'wide-left'
  | 'wide-right'
  | 'wide-bottom'
  | 'mid-up'
  | 'mid-left'
  | 'mid-right'
  | 'mid-bottom';


export interface ProjectSectionType {
    alignment?: AlignementTypes;
    columns?: 0 | 1 | 2 | 3;
    image?: ImageInterface;
    mainColor?: string;
    marginBottom?: boolean;
    maxWidth?: number;
    title?: string;
    content?: string;
}

export interface SectionsType{
    [key: string] : ProjectSectionType;
}

export interface ProjectInternalInfoTypes{
    myRole: string;
    overview: string;
    projectLink?: string;
    conclusion?: ProjectSectionType;
    sections?: SectionsType;
}

export interface YearsTypes{
first: string | number;
    last?: string | number;
}

export type ProjectAllTypes = ProjectMainType & ProjectInternalInfoTypes;

export interface ProjectsType {
  [key: string]: ProjectAllTypes;
}

export interface ExperienceProps {
    country: string;
    company: string;
    position: string;
    description: string;
    years: YearsTypes;
}

export type Action = 
{type: 'INITIAL_STATE'} |{type: 'ADD_CURSOR_BORDER'} | {type: 'REMOVE_CURSOR_BORDER'} | {type: 'RESET_CURSOR_COLOR'} | {type: 'LOCK_CURSOR_POSITION', payload: {x : number, y: number}};


export type State = {
  cursorStyle: {
    bordered: boolean;
    color: string;
  },
  position?: {
    x: number;
    y: number;
  } | null;
};

export type DispatchActionType = (action: Action) => void;