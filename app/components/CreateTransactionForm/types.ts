export type TransactionType = {
  id: number;
  name: string;
}

export type CreateTransactionFormState = {
  sum: number;
  props: {
    type: number;
    source: string;
    category: string;
  };
  description: string;
}