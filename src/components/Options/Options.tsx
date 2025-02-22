import { FC } from 'react';
import { InitialStateTypes } from '../../types.ts';

interface OptionsProps {
  options: InitialStateTypes;
  totalFeedback: number;
  onFeedbackUpdate: (key: keyof InitialStateTypes) => void;
  handleReset: () => void;
}

const Options: FC<OptionsProps> = ({ options, onFeedbackUpdate, totalFeedback, handleReset }) => {
  const keys = Object.keys(options) as (keyof InitialStateTypes)[];

  return (
    <>
      {keys.map(key => (
        <button type="button" key={key} onClick={() => onFeedbackUpdate(key)}>
          {key}
        </button>
      ))}
      {totalFeedback > 0 ? (
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      ) : null}
    </>
  );
};

export default Options;
