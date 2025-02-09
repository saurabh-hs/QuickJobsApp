import './App.css';
import { Divider, MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindJobsPage from './Pages/FindJobsPage';
import FindTalentPage from './Pages/FindTalentPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import PostJobPage from './Pages/PostJobPage';
import JobDescPage from './Pages/JobDescPage';

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
    <MantineProvider theme={theme}>
      <Router>
        <Header />
        <Divider size="xs" mx="md"/>
        <Routes>
          <Route path='/find-jobs' element={<FindJobsPage />} />
          <Route path='/find-talent' element={<FindTalentPage />} />
          <Route path='/jobs' element={<JobDescPage />} />
          <Route path='/post-job' element={<PostJobPage />} />
          <Route path='/talent-profile' element={<TalentProfilePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </MantineProvider>
  )
}

export default App;
