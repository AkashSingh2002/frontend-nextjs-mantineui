function cutAudio(audioBuffer, startTime, endTime) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    const duration = endTime - startTime;
    const newBuffer = audioContext.createBuffer(
      audioBuffer.numberOfChannels,
      audioContext.sampleRate * duration,
      audioContext.sampleRate
    );
  
    for (let i = 0; i < audioBuffer.numberOfChannels; i++) {
      const channelData = audioBuffer.getChannelData(i);
      newBuffer.copyToChannel(
        channelData.slice(startTime * audioContext.sampleRate, endTime * audioContext.sampleRate),
        i
      );
    }
    return newBuffer;
  }
  