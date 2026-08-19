import { LucideIcon } from 'lucide-react';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface CultureCategory {
  title: string;
  icon: LucideIcon;
}

export interface ThemeItem {
  title: string;
  problem?: string;
  context?: string;
  proposal?: string;
  source?: string;
}

export interface ProposalItem {
  id: string;
  title: string;
  problem: string;
  discussion: string;
  proposal: string;
  execution: string;
  sources: string[];
}
