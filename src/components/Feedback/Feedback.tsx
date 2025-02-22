import { FC } from 'react';
import { InitialStateTypes } from '../../types.ts';

const Feedback: FC<{ options: InitialStateTypes }> = ({ options }) => {
  const { good, neutral, bad } = options;
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
    </>
  );
};

export default Feedback;
