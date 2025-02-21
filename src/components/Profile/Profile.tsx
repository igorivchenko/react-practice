import { FC } from 'react';

type Stats = {
  followers: number;
  views: number;
  likes: number;
};

interface ProfileProps {
  name: string;
  tag: string;
  location: string;
  image: string;
  stats: Stats;
}

const Profile: FC<ProfileProps> = ({ name, tag, location, image, stats }) => {
  return (
    <div>
      <div>
        <img style={{ width: 100 }} src={image} alt="User avatar" />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
