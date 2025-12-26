/**
 * Starlight helper utilities
 * Copied from @astrojs/starlight internal APIs to avoid direct dependency on internal modules
 */

// Types
export interface SidebarLink {
  type: 'link';
  label: string;
  href: string;
  isCurrent: boolean;
  badge: any;
  attrs: any;
}

export interface SidebarGroup {
  type: 'group';
  label: string;
  entries: (SidebarLink | SidebarGroup)[];
  collapsed: boolean;
  badge: any;
}

export type SidebarEntry = SidebarLink | SidebarGroup;

// Constants
/** ID of the page title heading. */
export const PAGE_TITLE_ID = '_top';

// Utility functions
/** Turn the nested tree structure of a sidebar into a flat list of all the links. */
export function flattenSidebar(sidebar: SidebarEntry[]): SidebarLink[] {
  return sidebar.flatMap((entry) =>
    entry.type === 'group' ? flattenSidebar(entry.entries) : entry
  );
}
