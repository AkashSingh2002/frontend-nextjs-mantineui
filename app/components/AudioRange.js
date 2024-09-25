import { Slider } from '@mantine/core';

function AudioRangeSelector({ duration, onRangeChange }) {
  return (
    <div>
      <Slider
        label="Start Time"
        max={duration}
        onChange={(value) => onRangeChange({ start: value })}
      />
      <Slider
        label="End Time"
        max={duration}
        onChange={(value) => onRangeChange({ end: value })}
      />
    </div>
  );
}

export default AudioRangeSelector;
