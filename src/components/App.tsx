import './App.css';
import Profile from './Profile/Profile.tsx';
import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import FriendList from './FriendList/FriendList.tsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.tsx';
function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
