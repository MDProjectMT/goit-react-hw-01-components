import { Component } from 'react';
import styles from './Profile.module.scss';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      tag: props.tag,
      location: props.location,
      avatar: props.avatar,
      stats: props.stats,
    };
  }

  render() {
    return (
      <div className={styles.profile}>
        <div className={styles.description}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="User avatar"
            className={styles.avatar}
          />
          <p className={styles.name}>{this.state.username}</p>
          <p className={styles.tag}>@{this.state.tag}</p>
          <p className={styles.location}>{this.state.location}</p>
        </div>

        <ul className={styles.stats}>
          <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>
              {this.state.stats.followers}
            </span>
          </li>
          <li className={styles.border}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{this.state.stats.views}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{this.state.stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  }
}
