"use client"
import { createContext, useState, useContext, useRef } from 'react';

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext); // Correct export of useAudio

export function AudioProvider({ children }) {
  const [audioFile, setAudioFile] = useState(null);
  const [audioDuration, setAudioDuration] = useState(0);
  const audioRef = useRef(null);

  const onFileSelect = (file) => {
    setAudioFile(file);
    const audio = new Audio(URL.createObjectURL(file));
    audio.onloadedmetadata = () => {
      setAudioDuration(audio.duration);
    };
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <AudioContext.Provider
      value={{
        audioFile,
        audioDuration,
        audioRef,
        onFileSelect,
        playAudio,
        pauseAudio,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}
