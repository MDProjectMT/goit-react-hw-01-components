import styles from './FriendList.module.scss';

export default ({ id, inOnline, avatar, name }) => (
  <li className={styles.item} key={id}>
    <span className={styles.status}>{inOnline}</span>
    <img className={avatar} src={avatar} alt="User avatar" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);
