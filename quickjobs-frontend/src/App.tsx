import './App.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import Store from './Store';
import { Provider } from 'react-redux';
import AppRoutes from './Pages/AppRoutes';

function App() {
  const theme = createTheme({
    focusRing: "never",
    fontFamily: "Poppins, sans-serif",
    primaryColor: 'cloud-burst',
    primaryShade:9,
    colors: {
      'cloud-burst': [
        '#f0f7fe',
        '#deecfb',
        '#c5e0f8',
        '#9ccdf4',
        '#6eb0ec',
        '#4b92e6',
        '#3676da',
        '#2d62c8',
        '#2b50a2',
        '#274681',
        '#1f3056',
      ],
      buccaneer: [
        '#fcf4f4',
        '#f8e8e8',
        '#f4d4d4',
        '#eab7b7',
        '#dd8c8c',
        '#cd6666',
        '#b74b4b',
        '#993c3c',
        '#803434',
        '#582828',
        '#391616',
      ],
    },
  });

  return (
    <Provider store={Store} >
    <MantineProvider theme={theme}>
      <Notifications position="top-right" zIndex={1000} />
      <AppRoutes />
    </MantineProvider>
    </Provider>
  )
}

export default App;
