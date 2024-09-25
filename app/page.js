"use client";
import { Container, Grid, Title, Group, Button } from '@mantine/core';
import CuttingTool from './components/CuttingTool';
import AudioShowcase from './components/AudioShowcase';

function LandingPage() {
  return (
    <Container fluid style={{ padding: '20px' }}>
      <Grid gutter="xl">
        <Grid.Col span={12}>
          <Title order={1} style={{ textAlign: 'center', marginBottom: '20px' }}>
            Vocal Remover
          </Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Group position="center">
            <Button variant="outline" style={{ width: '150px' }}>
              Open
            </Button>
            <Button variant="outline" style={{ width: '150px' }}>
              Save
            </Button>
          </Group>
        </Grid.Col>
        <Grid.Col span={12}>
          <CuttingTool />
        </Grid.Col>
        <Grid.Col span={12}>
          <AudioShowcase />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default LandingPage;