import { Component } from 'react';
import styles from './Statistics.module.scss';

export default class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: props.stats,
    };
  }
  getColorClass(index) {
    const colorClasses = [
      styles.bgColor1,
      styles.bgColor2,
      styles.bgColor3,
      styles.bgColor4,
      styles.bgColor5,
    ];
    return colorClasses[index % colorClasses.length];
  }

  render() {
    return (
      <>
        <section className={styles.statistics}>
          <h2 className={styles.title}>Upload stats</h2>
          <ul className={styles.list}>
            {this.state.stats.map((stat, index) => (
              <li
                className={`${styles.item} ${this.getColorClass(index)}`}
                key={stat.id}
              >
                <span className={styles.label}>{stat.label}</span>
                <span className={styles.percentage}>{stat.percentage}%</span>
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
