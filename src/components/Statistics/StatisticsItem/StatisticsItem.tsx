import css from "./Statistics.module.css";

export const StatisticsItem: React.FC<{
  label: string;
  percentage: number;
}> = ({ label, percentage }): any => {
  return (
    <li
      className={css.item}
      style={{
        backgroundColor: `${getRandomHexColor()}`,
      }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>
        {percentage}
      </span>
    </li>
  );
};

function getRandomHexColor(): string {
  return `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
}
