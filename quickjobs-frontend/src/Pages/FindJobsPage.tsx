import { Divider } from "@mantine/core";
import SearchBar from "../FindJobs/SearchBar";
import Jobs from "../FindJobs/Jobs";

const FindJobsPage=()=> {
    return( <div className="min-h-[100vh] bg-cloud-burst-50 font-['Poppins']">
        <SearchBar />
        <Divider size="xs" mx="md"/>
        <Jobs />

    </div>
    )
};

export default FindJobsPage;