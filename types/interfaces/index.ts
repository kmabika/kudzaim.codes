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
    image: string;
    currentUrl: string;
    locale: string;
    mainColor?: string;
}

export interface HeaderTypes{
    bgColor?: string;
    scrollTop?: number;
    limitScroll?: number;
    isOpen?: boolean;
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
}

export type Asset = {
    url: string;
}

export interface ProjectMainType{
    client: string;
    headline: string;
    mainColor: string;
    cardImages: Asset[];
    skills: string[];
    slug: string;
    years?: YearsTypes;
}

export interface BlogPostMainType {
    mainColor: string;
    title: string;
    excerpt: string;
    cardImages: Asset[];
    tags: string[];
    slug: string;
}

export interface ImageInterface {
    height: number;
    priority?: boolean;
    src: string;
    width: number;
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
}

export interface SectionsType{
    [key: string] : ProjectSectionType;
}

export interface ProjectInternalInfoTypes{
    myRole: string;
    overview: string;
    conclusion: ProjectSectionType;
    sections: SectionsType;
}

export interface YearsTypes{
first: string | number;
    last?: string | number;
}

export type ProjectAllTypes = ProjectMainType & ProjectInternalInfoTypes;
export type BlogPostAllTypes = BlogPostMainType;

export interface ProjectsType {
  [key: string]: ProjectAllTypes;
}

export interface BlogPostsType {
    [key: string]: BlogPostAllTypes;
}