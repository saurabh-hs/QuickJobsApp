import Header from '../Header/Header';
import Companies from '../LandingPage/Companies';
import DreamJob from '../LandingPage/DreamJob';
import JobCategory from '../LandingPage/JobCategory';

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-cloud-burst-50 font-['Poppins']">
      <Header />;
      <DreamJob />
      <Companies />
      <JobCategory />
    </div>
  );
};

export default HomePage;
