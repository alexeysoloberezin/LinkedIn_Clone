export type NavItemProps = {
  icon: NavIcon;
  label: string;
  notifications?: number | undefined | null;
}

export type NavListProps = {
  items: NavItemProps[];
  notifications?: number;
}

export type NavIcon = 'home' | 'jobs' | 'messages' | 'network' | 'notify';