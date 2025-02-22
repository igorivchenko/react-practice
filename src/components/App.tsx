import { useEffect, useState } from 'react';
import './App.css';
import Description from './Description/Description.tsx';
import Options from './Options/Options.tsx';
import Feedback from './Feedback/Feedback.tsx';
import { InitialStateTypes } from '../types.ts';
import Notification from './Notification/Notification.tsx';
function App() {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [options, SetOptions] = useState<InitialStateTypes>(() => {
    const savedState = localStorage.getItem('options');

    if (savedState) return JSON.parse(savedState);

    return initialState;
  });

  useEffect(() => localStorage.setItem('options', JSON.stringify(options)), [options]);

  const updateFeedback = (feedbackType: keyof InitialStateTypes) => {
    SetOptions(prev => {
      return { ...prev, [feedbackType]: prev[feedbackType] + 1 };
    });
  };

  const handleReset = () => SetOptions(initialState);

  const { good, neutral, bad } = options;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        options={options}
        onFeedbackUpdate={updateFeedback}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          options={options}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
