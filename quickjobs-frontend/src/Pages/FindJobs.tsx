import { Divider } from "@mantine/core";
import SearchBar from "../FindJobs/SearchBar";
import { useState } from "react";
import Jobs from "../FindJobs/Jobs";

const FindJobs=()=> {
    const [value, setValue] = useState<[number, number]>([20, 80]);
    return( <div className="min-h-[100vh] bg-cloud-burst-50 font-['Poppins']">
        <Divider size="xs" mx="md"/>
        <SearchBar />
        <Divider size="xs" mx="md"/>
        <Jobs />

    </div>
    )
};

export default FindJobs;