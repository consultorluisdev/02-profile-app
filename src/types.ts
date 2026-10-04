export type ThemeColors = {
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  accent: string;
  accentText: string;
};

export type Profile = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  location: string;
  stats: {
    projects: number;
    followers: number;
    following: number;
  };
};
