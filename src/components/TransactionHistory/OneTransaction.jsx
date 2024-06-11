import styles from './TransactionHistory.module.scss';
import PropTypes from 'prop-types';

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

OneTransaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default OneTransaction;
