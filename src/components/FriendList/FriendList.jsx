import { Component } from 'react';
import OneFriend from './OneFriend';

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
        <ul>
          {this.state.friends.map(friend => {
            return (
              <OneFriend
                key={friend.id}
                inOnline={friend.inOnline}
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
