import { FC } from 'react';

type Item = {
  id: string;
  type: string;
  amount: string;
  currency: string;
};

interface TransactionHistoryProps {
  items: Item[];
}

const TransactionHistory: FC<TransactionHistoryProps> = ({ items }) => {
  return (
    <>
      <table style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            rowGap: 7,
          }}
        >
          {items.map(item => (
            <tr
              style={{
                display: 'flex',
                columnGap: 20,
              }}
              key={item.id}
            >
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
