import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import JobDesc from "../JobDesc/JobDesc";
import RecommendedJob from "../JobDesc/RecommendedJob";
import { useEffect, useState } from "react";
import { getJob } from "../Services/JobService";

const JobDescPage = () => {
    const {id} = useParams();
    const [job, setJob]=useState<any>(null);
    useEffect(()=>{
        window.scrollTo(0,0);
        getJob(id).then((res)=>{
            setJob(res);
        }).catch((err)=>{
            console.log(err);
        })
    },[id])
    return (
        <div className="min-h-[90vh] bg-cloud-burst-50 font-['Poppins'] p-4">
            <Link className="my-4 inline-block flex flex-start" to="/find-jobs">
                <Button leftSection={<IconArrowLeft size={20} />} color="cloud-burst.9" variant="light">
                    Back
                </Button>
            </Link>
            {/* Reduce gap */}
            <div className="flex gap-5 justify-around">
                {/* Job Description takes 2/3 width */}
                <div className="w-[68%]">
                    <JobDesc {...job}/>
                </div>
                {/* Recommended Jobs take 1/3 width */}
                <div className="w-[28%]">
                    <RecommendedJob />
                </div>
            </div>
        </div>
    );
};

export default JobDescPage;
