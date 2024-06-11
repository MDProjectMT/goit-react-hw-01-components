import { Component } from 'react';
import OneTransaction from './OneTransaction';
import styles from './TransactionHistory.module.scss';
import PropTypes from 'prop-types';

export default class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
    };
  }

  render() {
    return (
      <>
        <table className={styles.transaction}>
          <thead className={styles.thead}>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          {this.state.items.map(item => {
            return (
              <OneTransaction
                key={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            );
          })}
        </table>
      </>
    );
  }
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
