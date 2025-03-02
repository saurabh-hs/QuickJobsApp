import { jobList } from "../Data/JobsData";
import JobCard from "../FindJobs/JobCard";

const CompanyJobs=()=>{
    return <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 w-full">
        {
            jobList.map((job, index) => <JobCard key={index} {...job} />)
        }
    </div>
}

export default CompanyJobs;