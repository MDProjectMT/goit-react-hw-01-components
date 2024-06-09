import { Component } from 'react';
import styles from './Statistics.module.scss';

export default class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: props.stats,
    };
  }

  render() {
    return (
      <>
        <section className={styles.statistics}>
          <h2 className={styles.title}>Upload stats</h2>
          <ul className={styles.list}>
            {this.state.stats.map(stat => {
              return (
                <li className={styles.item} key={stat.id}>
                  <span className={styles.label}>{stat.label}</span>
                  <span className={styles.percentage}>{stat.percentage}</span>
                </li>
              );
            })}
          </ul>
        </section>
      </>
    );
  }
}
