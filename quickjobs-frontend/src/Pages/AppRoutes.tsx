import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../Header/Header"
import { Divider } from "@mantine/core"
import FindJobsPage from "./FindJobsPage"
import FindTalentPage from "./FindTalentPage"
import JobDescPage from "./JobDescPage"
import PostJobPage from "./PostJobPage"
import CompanyPage from "./CompanyPage"
import PostedJobPage from "./PostedJobPage"
import SignUpPage from "./SignUpPage"
import JobHistoryPage from "./JobHistoryPage"
import ApplyJobPage from "./ApplyJobPage"
import ProfilePage from "./ProfilePage"
import TalentProfilePage from "./TalentProfilePage"
import HomePage from "./HomePage"
import Footer from "../Footer/Footer"
import ProtectedRoute from "../Services/ProtectedRoute"
import PublicRoute from "../Services/PublicRoute"


const AppRoutes=()=>{
    return <BrowserRouter>
        <div className='relative'>
        <Header />
        <Divider size="xs" mx="md"/>
        <Routes>
          <Route path='/find-jobs' element={<FindJobsPage />} />
          <Route path='/find-talent' element={<FindTalentPage />} />
          <Route path='/jobs/:id' element={<JobDescPage />} />
          <Route path='/post-job/:id' element={<ProtectedRoute allowedRoles={['EMPLOYER']}><PostJobPage /></ProtectedRoute>} />
          <Route path='/company/:name' element={<CompanyPage />} />
          <Route path='/posted-job/:id' element={<ProtectedRoute allowedRoles={['EMPLOYER']}><PostedJobPage /></ProtectedRoute>}/>
          <Route path='/signup' element={<PublicRoute><SignUpPage /></PublicRoute>} />
          <Route path='/login' element={<SignUpPage />} />
          <Route path='/job-history' element={<ProtectedRoute allowedRoles={['APPLICANT']}><JobHistoryPage /></ProtectedRoute>} />
          <Route path='/apply-job/:id' element={<ApplyJobPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/talent-profile/:id' element={<TalentProfilePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
}

export default AppRoutes;