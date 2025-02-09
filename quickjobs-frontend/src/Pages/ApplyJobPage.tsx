import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";

const ApplyJobPage=()=> {
    return( <div className="min-h-[90vh] bg-cloud-burst-50 font-['Poppins'] p-4">
         <div className="flex flex-col gap-2">
            <Link className="my-4 inline-block flex flex-start" to="/jobs">
                <Button leftSection={<IconArrowLeft size={20} />} color="cloud-burst.9" variant="light">
                    Back
                </Button>
            </Link>
            <ApplyJobComp />
            </div>
       
    </div>
    )
};

export default ApplyJobPage;