import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../JobDesc/JobDesc";
import RecommendedJob from "../JobDesc/RecommendedJob";

const JobDescPage = () => {
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
                    <JobDesc />
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
