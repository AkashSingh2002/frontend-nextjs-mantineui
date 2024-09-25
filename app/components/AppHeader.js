
import { Header, Container, Text } from '@mantine/core';

function AppHeader() {
  return (
    <Navbar height={60} padding="xs">
      <Container>
        <Text>Audio Cutter</Text>
      </Container>
    </Navbar>
  );
}

export default AppHeader; // Ensure this is a default export
