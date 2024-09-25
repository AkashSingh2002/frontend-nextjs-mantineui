// AudioShowcase.js
import { useState } from 'react';
import { Container, Grid, Text, Button, Group } from '@mantine/core';

function AudioShowcase({ audioUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = audioUrl;
    link.download = 'audio.wav';
    link.click();
  };

  return (
    <Container style={{ padding: '20px' }}>
      <Grid gutter="xl">
        <Grid.Col span={12}>
          <Text size="lg" weight="bold" style={{ marginBottom: '20px' }}>
            Audio Showcase
          </Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Group position="center">
            <Button variant="outline" style={{ width: '150px' }} onClick={handlePlay}>
              Play
            </Button>
            <Button variant="outline" style={{ width: '150px' }} onClick={handleDownload}>
              Download
            </Button>
          </Group>
        </Grid.Col>
        {isPlaying && (
          <Grid.Col span={12}>
            <audio src={audioUrl} autoPlay />
          </Grid.Col>
        )}
      </Grid>
    </Container>
  );
}

export default AudioShowcase;