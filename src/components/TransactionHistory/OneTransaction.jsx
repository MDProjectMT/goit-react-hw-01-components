import styles from './TransactionHistory.module.scss';

const OneTransaction = ({ id, type, amount, currency }) => (
  <>
    <tbody className={styles.tbody}>
      <tr className={styles.tbodydata} key={id}>
        <td className={styles.tdbodydata}>{type}</td>
        <td className={styles.tdbodydata}>{amount}</td>
        <td className={styles.tdbodydata}>{currency}</td>
      </tr>
    </tbody>
  </>
);

export default OneTransaction;
