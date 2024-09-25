import { MantineProvider, Container, Title, Button } from '@mantine/core';

export const metadata = {
  title: 'My App',
  description: 'My Next.js app using Mantine UI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: 'light',
            colors: {
              blue: ['#3498db', '#2ecc71', '#1abc9c', '#16a085', '#149b8d', '#128c7e', '#117a65', '#106a5d', '#0e6251'],
              secondary: ['#f1c40f', '#f39c12', '#f1c40f', '#f1c40f', '#f1c40f', '#f1c40f', '#f1c40f', '#f1c40f', '#f1c40f'],
            },
            primaryColor: 'blue',
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
            },
          }}
        >
          <Container size="lg" style={{ padding: 20 }}>
            
            {children}
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}