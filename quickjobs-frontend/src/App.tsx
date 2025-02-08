import './App.css';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindJobsPage from './Pages/FindJobsPage';
import FindTalentPage from './Pages/FindTalentPage';

function App() {
  const theme = createTheme({
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
    fontFamily:"poppins, sans-serif"
  });

  return (
    <MantineProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path='/find-jobs' element={<FindJobsPage />} />
          <Route path='/find-talent' element={<FindTalentPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </MantineProvider>
  )
}

export default App;
