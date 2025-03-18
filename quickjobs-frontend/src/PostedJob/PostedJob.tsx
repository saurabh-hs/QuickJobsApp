import { Tabs } from "@mantine/core";
import { activeJobs } from "../Data/PostedJob";
import PostedJobCard from "./PostedJobCard";

const PostedJob=()=> {
    return <div>
        <div className="text-2xl font-semibold mb-5">Jobs</div>
        <div>
            <Tabs autoContrast variant="pills" defaultValue="active">
                <Tabs.List className="[&_button[aria-selected='false]] :bg-cloud-burst-900 font-medium">
                    <Tabs.Tab value="active">Active [4]</Tabs.Tab>
                    <Tabs.Tab value="draft">Drafts</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="active">
                    <div className="flex flex-col gap-5 mt-5">
                        {
                            activeJobs.map((item, index)=><PostedJobCard key={index} {...item}/>)
                        }
                    </div>

                </Tabs.Panel>
                <Tabs.Panel value="draft">
                    s
                </Tabs.Panel>
            </Tabs>
        </div>
    </div>
}

export default PostedJob;