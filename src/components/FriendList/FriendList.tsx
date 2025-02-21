import { FC } from 'react';
import FriendListItem from '../FriendListItem/FriendListItem.tsx';
import { Friend } from '../../types.ts';

interface FriendListProps {
  friends: Friend[];
}

const FriendList: FC<FriendListProps> = ({ friends }) => {
  return (
    <>
      <ul style={{ display: 'flex', gap: 20, listStyle: 'none', padding: 0, margin: 0 }}>
        {friends.map(friend => {
          return (
            <li key={friend.id}>
              <FriendListItem item={friend} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FriendList;
