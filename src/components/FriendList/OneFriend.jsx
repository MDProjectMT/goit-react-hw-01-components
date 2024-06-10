import styles from './FriendList.module.scss';

const OneFriend = ({ id, isOnline, avatar, name }) => (
  <li className={styles.item} key={id}>
    <span
      className={`${styles.status} ${
        isOnline ? styles.online : styles.offline
      }`}
    ></span>
    <img className={avatar} src={avatar} alt="User avatar" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

export default OneFriend;
