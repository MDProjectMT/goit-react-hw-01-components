import Profile from './Profile/Profile';
import user from './Profile/user';
import Statistics from './Statistics/Statistics';
import data from './Statistics/data';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends';

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <Statistics stats={data} />
      </div>
      <div>
        <FriendList friends={friends} />;
      </div>
      <div></div>
    </>
  );
};
