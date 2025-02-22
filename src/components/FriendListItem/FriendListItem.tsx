import { FC } from 'react';
import { Friend } from '../../types.ts';

const FriendListItem: FC<{ item: Friend }> = ({ item }) => {
  return (
    <>
      <div>
        <img src={item.avatar} alt="Avatar" width="48" />
        <p>{item.name}</p>
        {item.isOnline ? (
          <p style={{ color: 'green' }}>Online</p>
        ) : (
          <p style={{ color: 'red' }}>Offline</p>
        )}
      </div>
    </>
  );
};

export default FriendListItem;
