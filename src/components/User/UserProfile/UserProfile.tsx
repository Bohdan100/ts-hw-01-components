import css from "./UserProfile.module.css";

import { UserCard } from "../UserCard/UserCard";
import { UserStats } from "../UserStats/UserStats";

export const UserProfile: React.FC<{
  user: any;
}> = ({ user }): any => {
  return (
    <div className={css.profile} key={user.tag}>
      <UserCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />

      <UserStats stats={user.stats} />
    </div>
  );
};
