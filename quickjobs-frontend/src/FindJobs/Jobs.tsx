import JobCard from "./JobCard";
import Sort from "./Sort";

const Jobs=()=> {
    return <div className="px-5 mt-5">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold text-cloud-burst-900">Recommended Jobs</div>
            <Sort />
        </div>
        <JobCard />

    </div>
}

export default Jobs;