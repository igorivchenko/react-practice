import { FC } from 'react';
import { InitialStateTypes } from '../../types.ts';

interface FeedbackProps {
  options: InitialStateTypes;
  totalFeedback: number;
  positiveFeedback: number;
}

const Feedback: FC<FeedbackProps> = ({ options, totalFeedback, positiveFeedback }) => {
  const { good, neutral, bad } = options;
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </>
  );
};

export default Feedback;
