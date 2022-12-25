import css from "../TransactionsHistory/TransactionsHistory.module.css";

export const TransactionsTitle: React.FC =
  (): any => {
    return (
      <thead>
        <tr>
          <th className={css.tableTitle}>Type</th>
          <th className={css.tableTitle}>
            Amount
          </th>
          <th className={css.tableTitle}>
            Currency
          </th>
        </tr>
      </thead>
    );
  };
