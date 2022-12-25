import css from "../StatisticsItem/Statistics.module.css";

export const StatisticsTitle: React.FC<{
  title?: string;
}> = ({ title }): any => {
  return (
    title && (
      <h2 className={css.title}>{title}</h2>
    )
  );
};
