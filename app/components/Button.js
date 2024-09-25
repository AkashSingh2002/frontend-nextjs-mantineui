import { Button } from '@mantine/core';

function ButtonComponent({ label, onClick }) {
  return (
    <Button variant="filled" color="blue" onClick={onClick}>{label}</Button>
  );
}

export default ButtonComponent;