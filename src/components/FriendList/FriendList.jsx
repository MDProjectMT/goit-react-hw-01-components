import { Component } from 'react';
import OneFriend from './OneFriend';
import styles from './FriendList.module.scss';

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: props.friends,
    };
  }

  render() {
    return (
      <>
        <ul className={styles.container}>
          {this.state.friends.map(friend => {
            return (
              <OneFriend
                key={friend.id}
                isOnline={friend.isOnline}
                avatar={friend.avatar}
                name={friend.name}
              />
            );
          })}
        </ul>
      </>
    );
  }
}
