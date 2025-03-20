import { Divider } from "@mantine/core"
import JobHistory from "../JobHistory/JobHistory";


const JobHistoryPage=()=> {
    return <div className="min-h-[90vh] bg-cloud-burst-50 font-['Poppins']">
        <Divider size="xs" />
        <div className="my-5">
            <JobHistory />
        </div>

    </div>
}

export default JobHistoryPage;