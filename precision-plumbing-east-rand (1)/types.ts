import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ReviewItem {
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface NavItem {
  label: string;
  path: string;
}