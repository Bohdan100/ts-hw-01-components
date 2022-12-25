import css from "../FriendList/FriendList.module.css";
import defaultImage from "./logo192.png";

export const FriendListItem: React.FC<{
  avatar: string;
  name: string;
  isOnline: boolean;
}> = ({
  avatar = defaultImage,
  name = "unknown",
  isOnline = false,
}): any => {
  return (
    <li className={css.item}>
      <span>
        {isOnline ? (
          <div className={css.statusOnline}></div>
        ) : (
          <div
            className={css.statusOffline}
          ></div>
        )}
      </span>
      <img
        className={css.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};
