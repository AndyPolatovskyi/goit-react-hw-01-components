
import { Profile } from "Profile/Profile";
import { Statistics } from "Statistics/Statistics";
import { FriendList } from "FriendList/FriendList";
import { FriendListItem } from "FriendListItem/FriendListItem";
import { TransactionHistory } from "TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     
      <div>
      <Profile /> 
      <Statistics />
      <FriendList />
      <FriendListItem />
      <TransactionHistory />
      </div>

    </div>
  );
};
