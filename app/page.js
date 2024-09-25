import Layout from './layout';
import { Container } from '@mantine/core';
import AudioFileInput from './components/FileInput';

export default function Home() {
  return (
    <Layout>
      <Container>
        {/* Content goes here */}
        <AudioFileInput />
      </Container>
    </Layout>
  );
}
