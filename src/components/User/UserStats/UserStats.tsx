import css from "../UserProfile/UserProfile.module.css";

export const UserStats: React.FC<{
  stats: any;
}> = ({ stats }): any => {
  const followers: number = stats.followers;
  const views: number = stats.views;
  const likes: number = stats.likes;

  return (
    <ul className={css.stats}>
      <li>
        <span className={css.label}>
          Followers
        </span>
        <span className={css.quantity}>
          {followers}
        </span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>
          {views}
        </span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>
          {likes}
        </span>
      </li>
    </ul>
  );
};
