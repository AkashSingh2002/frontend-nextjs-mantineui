import { Button, Group } from '@mantine/core';

function ControlButtons() {
  return (
    <Group direction="column" spacing="xs">
      <Button variant="light">Trim</Button>
      <Button variant="light">Fade In</Button>
      <Button variant="light">Fade Out</Button>
    </Group>
  );
}

export default ControlButtons;
