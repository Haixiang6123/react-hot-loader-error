import {FC, lazy, LazyExoticComponent} from 'react'

type JSXFunc = () => JSX.Element;

export interface PageRoute {
  pathname: string;
  name: string;
  component: LazyExoticComponent<FC> | JSXFunc;
}

const basePageRoutes: PageRoute[] = [
  {
    pathname: '/page1',
    name: 'page1',
    component: lazy(() => import(/* webpackPrefetch: true */ './Page1')),
  },
  {
    pathname: '/page22',
    name: 'page2',
    component: lazy(() => import(/* webpackPrefetch: true */ './Page2')),
  },
];

export default basePageRoutes
