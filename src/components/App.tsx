import { useState } from 'react';
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

  const [options, SetOptions] = useState<InitialStateTypes>(initialState);

  const updateFeedback = (feedbackType: keyof InitialStateTypes) => {
    SetOptions(prev => {
      return { ...prev, [feedbackType]: prev[feedbackType] + 1 };
    });
  };
  const { good, neutral, bad } = options;
  const totalFeedback = good + neutral + bad;

  return (
    <>
      <Description />
      <Options options={options} onFeedbackUpdate={updateFeedback} />
      {totalFeedback > 0 ? <Feedback options={options} /> : <Notification />}
    </>
  );
}

export default App;
