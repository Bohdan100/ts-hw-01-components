import defaultImage from "./logo192.png";
import css from "../UserProfile/UserProfile.module.css";

interface IUserCardProps {
  username: string;
  tag: string;
  location: string;
  avatar: string;
}

export const UserCard = ({
  username = "not found",
  tag = "not found",
  location = "not found",
  avatar = defaultImage,
}: IUserCardProps): any => {
  return (
    <div className={css.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

UserCard.propTypes = {};
