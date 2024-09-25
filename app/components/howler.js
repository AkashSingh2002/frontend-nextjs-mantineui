import { useState } from 'react';
import { Howl } from 'howler';

function AudioPlayer({ file }) {
  const [audio, setAudio] = useState(null);

  // Load audio when file is selected
  const loadAudio = () => {
    const sound = new Howl({
      src: [URL.createObjectURL(file)],
    });
    setAudio(sound);
  };

  return (
    <div>
      <button onClick={loadAudio}>Load Audio</button>
      <div>
        {audio && (
          <>
            <button onClick={() => audio.play()}>Play</button>
            <button onClick={() => audio.pause()}>Pause</button>
          </>
        )}
      </div>
    </div>
  );
}
