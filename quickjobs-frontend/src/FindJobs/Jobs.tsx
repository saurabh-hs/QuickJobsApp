import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import Sort from "./Sort";
import { getAllJobs } from "../Services/JobService";

const Jobs=()=> {
    const [jobList, setJobList] = useState([{}]);
    useEffect(() =>{
        getAllJobs().then((res) =>{
            setJobList(res);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return <div className="px-5 mt-5">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold text-cloud-burst-900">Recommended Jobs</div>
            <Sort />
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
            {
                jobList.map((job, index) => <JobCard key={index} {...job} />)
            }
        </div>
       

    </div>
}

export default Jobs;