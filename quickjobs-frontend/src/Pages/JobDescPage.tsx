import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../JobDesc/JobDesc";

const JobDescPage=()=> {
    return( <div className="min-h-[90vh] bg-cloud-burst-50 font-['Poppins'] p-4">
        <Link className="my-4 inline-block flex flex-start" to="/find-jobs">
            <Button leftSection={<IconArrowLeft size={20} />} color="cloud-burst.9" variant="light">Back</Button>
        </Link>
        <div className="flex gap-5">
            <JobDesc />

        </div>

    </div>
    )
};

export default JobDescPage;