export default OneTransaction = ({ id, type, mount, currency }) => (
  <tr key={id}>
    <td>{type}</td>
    <td>{mount}</td>
    <td>{currency}</td>
  </tr>
);
