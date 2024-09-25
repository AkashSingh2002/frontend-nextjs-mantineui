import { createMantineTheme } from '@mantine/core';

export default createMantineTheme({
  fontFamily: 'Open Sans, sans-serif',
  fontSize: 16,
  lineHeight: 1.5,
  colors: {
    primary: ['#3498db', '#2ecc71', '#1abc9c', '#16a085', '#149b8d', '#128c7e', '#117a65', '#106a5d', '#0e6251'],
    secondary: ['#f1c40f', '#f39c12', '#f1c40f', '#f1c40f', '#f1c40f', '#f1c40f', '#f1c40f', '#f1c40f', '#f1c40f'],
    blue: ['#007bff', '#0069d9', '#005dbf', '#0047b5', '#003a8c'],
    dark: ['#2f343a', '#2f343a', '#2f343a', '#2f343a', '#2f343a', '#2f343a', '#2f343a', '#2f343a', '#2f343a'],
  },
  primaryColor: 'primary',
  primaryShade: 6,
  components: {
    Button: {
      styles: {
        root: {
          '&:hover': {
            backgroundColor: '#2ecc71',
          },
        },
      },
    },
    Input: {
      styles: {
        input: {
          backgroundColor: '#f7f7f7',
          borderColor: '#ddd',
          '&:focus': {
            borderColor: '#2ecc71',
          },
        },
      },
    },
    Text: {
      styles: {
        root: {
          color: '#333',
        },
      },
    },
  },
});