import { Component } from 'react';
import OneFriend from './OneFriend';
import styles from './FriendList.module.scss';
import PropTypes from 'prop-types';

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
FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ),
};
