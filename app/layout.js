import { AppShell, Header, Footer, MantineProvider } from '@mantine/core';
import AppHeader from './components/Header';
import { AudioProvider } from './components/AudioProvider'; // Import the AudioProvider

export default function Layout({ children }) {
  return (
    <MantineProvider
      theme={{ colorScheme: 'light', primaryColor: 'blue' }} // Customize theme here
      withGlobalStyles
      withNormalizeCSS
    >
      <AudioProvider>
        <AppShell
          padding="md"
          header={<Header height={60} p="xs"><AppHeader /></Header>}
          footer={<Footer height={60} p="xs">Footer content</Footer>}
        >
          {children}
        </AppShell>
      </AudioProvider>
    </MantineProvider>
  );
}
