//dashboard page types

export type dashboardProps = {
  TitleNav: React.ReactNode;
  LeftMenuPanel: React.ReactNode;
  children: React.ReactNode;
  RightMenuPanel: React.ReactNode;
};

export type headerItemProps = {
  title: string;
  iconName: string;
  url?: string | undefined;
};

export type clientDataProps = {
  id: string;
  name: string;
  authority: string;
  image: string;
};

// right panel
export type MyButtonProps = {
  btnName: string;
  Icon: React.ReactNode;
  url: string;
};

export type RightCardProps = {
  brandName?: string;
  heading?: string;
  url?: string;
  readTime?: string;
  paragraph?: string;
  btnName?: string;
  Icon?: React.ReactNode;
};

// dash-body

// user stats card
export type UserStatsCardProps = {
  title: string;
  total_users: number;
  label: string;
};

//transaction
export type TransactionRecordsProps = {
  title: string;
  status: string;
  date: string;
  amount: number;
}[];

// weekly data types
export type WeeklyChartProps = {
  day: string;
  clicks: number;
  visits: number;
}[];

// Users page types

export type UserDataTableProps = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  role: string;
  action: string;
}[];

// Products page types

export type ProductDataTableProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  createdAt: string;
  stock: number;
}[];
