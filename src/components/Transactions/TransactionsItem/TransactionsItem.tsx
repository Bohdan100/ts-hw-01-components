import css from "../TransactionsHistory/TransactionsHistory.module.css";

interface ITransactionsItemProps {
  type: string;
  amount: string;
  currency: string;
}

export const TransactionsItem = ({
  type = "unknown",
  amount = "unknown",
  currency = "unknown",
}: ITransactionsItemProps): any => {
  return (
    <tr>
      <td className={css.tabelCell}>{type}</td>
      <td className={css.tabelCell}>{amount}</td>
      <td className={css.tabelCell}>
        {currency}
      </td>
    </tr>
  );
};
