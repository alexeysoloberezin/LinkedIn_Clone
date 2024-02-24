import React from "react";

export type NavItemProps = {
  icon?: NavIcon;
  children: React.ReactNode;
  label: string;
  notifications?: number | undefined | null;
}

export type NavListProps = {
  items?: NavItemProps[];
  notifications?: number;
}

const NavIconArr =['home', 'jobs', 'messages', 'network', 'notify'] as const;

export type NavIcon = typeof NavIconArr[number];

export function isNavIcon(icon: any): icon is NavIcon {
  return NavIconArr.includes(icon);
}