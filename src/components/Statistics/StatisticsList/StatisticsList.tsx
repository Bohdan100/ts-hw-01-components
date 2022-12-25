import css from "../StatisticsItem/Statistics.module.css";

import { StatisticsItem } from "../StatisticsItem";
import { StatisticsTitle } from "../StatisticsTitle";

interface IStat {
  id: string;
  title?: string;
  label: string;
  percentage: number;
}

export const StatisticsList: React.FC<{
  stats: Array<IStat>;
  title?: string;
}> = ({ stats, title }): any => {
  return (
    <section className={css.statistics}>
      <StatisticsTitle title={title} />
      <ul className={css.statList}>
        {stats.map((stat) => (
          <StatisticsItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
};
