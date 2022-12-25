import css from "./TransactionsHistory.module.css";

import { TransactionsTitle } from "../TransactionsTitle";
import { TransactionsItem } from "../TransactionsItem";

interface ITransaction {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

export const TransactionsHistory: React.FC<{
  transactions: Array<ITransaction>;
}> = ({ transactions }): any => {
  return (
    <table className={css.transactionHistory}>
      <TransactionsTitle />
      <tbody>
        {transactions.map((transaction) => (
          <TransactionsItem
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
};
