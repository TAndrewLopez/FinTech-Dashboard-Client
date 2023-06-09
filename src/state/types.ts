export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Month {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

export interface Day {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Month[];
  dailyData: Day[];
  createdAt: string;
  updatedAt: string;
}

export interface GetProductResponse {
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: string[];
  createdAt: string;
  updatedAt: string;
}

export interface GetTransactionResponse {
  _id: string;
  __v: number;
  buyer: string;
  amount: number;
  productIds: string[];
  createdAt: string;
  updatedAt: string;
}
