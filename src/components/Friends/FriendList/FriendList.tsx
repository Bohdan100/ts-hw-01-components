import css from "./FriendList.module.css";

import { FriendListItem } from "../FriendListItem/FriendListItem";

interface IFriend {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}

export const FriendList: React.FC<{
  friends: Array<IFriend>;
}> = ({ friends }): any => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend: IFriend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};
