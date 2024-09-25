// CuttingTool.js
import { useState } from 'react';
import { Container, Grid, Text, Button, Input, Group } from '@mantine/core';

function CuttingTool() {
  const [audio, setAudio] = useState(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [cutAudio, setCutAudio] = useState(null);

  const handleAudioChange = (e) => {
    setAudio(e.target.files[0]);
  };

  const handleCut = () => {
    const audioContext = new AudioContext();
    const source = audioContext.createMediaSource(audio);
    const cutter = audioContext.createScriptProcessor(1024, 1, 1);
    cutter.onaudioprocess = (e) => {
      const audioData = e.inputBuffer.getChannelData(0);
      const startSample = start * 44100;
      const endSample = end * 44100;
      const cutAudioData = audioData.slice(startSample, endSample);
      const cutAudio = new Blob([cutAudioData], { type: 'audio/wav' });
      setCutAudio(cutAudio);
    };
    source.connect(cutter);
    source.start();
  };

  return (
    <Container style={{ padding: '20px' }}>
      <Grid gutter="xl">
        <Grid.Col span={12}>
          <Text size="lg" weight="bold" style={{ marginBottom: '20px' }}>
            Cutting Tool
          </Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Group position="center">
            <Input type="file" onChange={handleAudioChange} style={{ width: '300px' }} />
            <Button variant="outline" style={{ width: '150px' }} onClick={handleCut}>
              Cut
            </Button>
          </Group>
        </Grid.Col>
        {cutAudio && (
          <Grid.Col span={12}>
            <AudioShowcase audioUrl={URL.createObjectURL(cutAudio)} />
          </Grid.Col>
        )}
      </Grid>
    </Container>
  );
}

export default CuttingTool;