import { Component } from 'react';
import OneTransaction from './OneTransaction';
import styles from './TransactionHistory.module.scss';

export default class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    state = {
      items: props.items,
    };
  }

  render() {
    return (
      <>
        <table className={styles.transaction}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <OneTransaction
            key={items.id}
            type={items.type}
            mount={items.mount}
            currency={items.currency}
          />
        </table>
      </>
    );
  }
}
