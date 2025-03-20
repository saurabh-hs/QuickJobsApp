import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDesc=()=> {
    return <div className="mt-5 w-3/4 px-5">
        <div className="text-2xl font-semibold flex items-center text-cloud-burst-900">Software Engineer <Badge variant="light" ml="sm" color="cloud-burst.6" size="sm">Badge</Badge></div>
        <div  className="font-medium text-cloud-burst-600 mb-5 flex items-left">New York, United States</div>
        <div>
        <Tabs variant="outline" radius="lg" defaultValue="about">
            <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-cloud-burst-600 [&_button[data-active='false']]:text-cloud-burst-900">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="overview">
                <JobDesc edit />
            </Tabs.Panel>
            <Tabs.Panel value="applicants">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 mt-10">
                    {talents.map((talent, index) => 
                        index < 6 && (
                    <div key={index} className="p-2">
                            <TalentCard {...talent} posted />
                    </div>
                    )
                )}
                </div>
            </Tabs.Panel>
            <Tabs.Panel value="invited">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 mt-10">
                    {talents.map((talent, index) => 
                        index < 6 && (
                    <div key={index} className="p-2">
                            <TalentCard {...talent} invited />
                    </div>
                    )
                )}
                </div>
            </Tabs.Panel>
            </Tabs>
        </div>
    </div>
}

export default PostedJobDesc;