import { InjectionToken, Type } from '@angular/core';

export interface ComponentPageMap {
  [path: string]: ComponentPage;
}

export type ComponentPages = Array<ComponentPage & { path: string }>;

export interface ComponentPage {
  title: string;
  component: Type<any>;
}

export const COMPONENT_PAGES = new InjectionToken<ComponentPages>('COMPONENT_PAGES');
