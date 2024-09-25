"use client"; // This ensures the component runs on the client side

import { FileInput as MantineFileInput } from '@mantine/core';
import { useAudio } from './AudioProvider';

export default function AudioFileInput() {
  const { onFileSelect } = useAudio(); // Use the onFileSelect function from AudioContext

  return (
    <MantineFileInput
      placeholder="Choose audio file"
      label="Upload Audio"
      accept="audio/*"
      onChange={(file) => onFileSelect(file)} // Pass selected file to context
    />
  );
}
