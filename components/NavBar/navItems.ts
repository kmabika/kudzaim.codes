import Router from "next/router";
import { NavBarItemType } from "types/interfaces";
import { scrollToElement } from "utils";


export const NavItems: NavBarItemType[] = [
    {
      label: 'Home',
      type: 'link',
      route: '/',
      isExternal: false,
    },
    {
      label: 'Projects',
      type: 'action',
      onClick: () => {
        if (window?.location?.pathname !== '/') {
          Router.push({ pathname: '/', query: { g: 'projects' } });
        }
        scrollToElement('projects');
      },
    },
    // {
    //   label: 'Articles',
    //   type: 'action',
    //   onClick: () => {
    //     if (window?.location?.pathname !== '/') {
    //       Router.push({ pathname: '/', query: { g: 'articles' } });
    //     }
    //     scrollToElement('articles');
    //   },
    // },
    {
      label: 'About',
      type: 'link',
      route: '/about',
      isExternal: false,
    },
    {
      label: 'Resume',
      type: 'link',
      route: '/resume',
      isExternal: true,    },

  ];