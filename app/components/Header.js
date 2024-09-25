import { Header, Container, Text } from '@mantine/core';

function AppHeader() {
  return (
    <Header height={60} padding="xs">
      <Container>
        <Text>Audio Cutter</Text>
      </Container>
    </Header>
  );
}

export default AppHeader;
