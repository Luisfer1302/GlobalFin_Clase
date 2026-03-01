export type Screen = 'home' | 'stats' | 'log' | 'profile';

export interface ActivityCard {
  id: string;
  title: string;
  value: string;
  unit: string;
  icon: string;
  color: string;
  progress: number;
}

export interface Highlight {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}
