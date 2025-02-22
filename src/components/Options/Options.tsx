import { FC } from 'react';
import { InitialStateTypes } from '../../types.ts';

interface OptionsProps {
  options: InitialStateTypes;
  onFeedbackUpdate: (key: keyof InitialStateTypes) => void;
}

const Options: FC<OptionsProps> = ({ options, onFeedbackUpdate }) => {
  const keys = Object.keys(options) as (keyof InitialStateTypes)[];
  return (
    <>
      {keys.map(key => (
        <button type="button" key={key} onClick={() => onFeedbackUpdate(key)}>
          {key}
        </button>
      ))}
    </>
  );
};

export default Options;
