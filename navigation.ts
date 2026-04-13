import { Briefcase, Cpu, FileText, FolderOpen, User, type LucideIcon } from 'lucide-react';
import { MenuTab } from './types';

export interface NavigationItem {
  id: MenuTab;
  label: string;
  icon: LucideIcon;
  placement: 'primary' | 'utility';
}

export const NAV_ITEMS: NavigationItem[] = [
  { id: MenuTab.Profile, label: 'EXPERIENCE', icon: Briefcase, placement: 'primary' },
  { id: MenuTab.Projects, label: 'PROJECTS', icon: FolderOpen, placement: 'primary' },
  { id: MenuTab.About, label: 'ABOUT', icon: User, placement: 'primary' },
  { id: MenuTab.Skills, label: 'SKILLS', icon: Cpu, placement: 'primary' },
  { id: MenuTab.Credits, label: 'CREDITS', icon: FileText, placement: 'utility' }
];

export const PRIMARY_NAV_ITEMS = NAV_ITEMS.filter((item) => item.placement === 'primary');
export const NAVIGATION_ORDER = NAV_ITEMS.map((item) => item.id);
export const DEFAULT_MENU_TAB = NAVIGATION_ORDER[0] ?? MenuTab.Profile;
