import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";

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

            </Tabs.Panel>
            <Tabs.Panel value="invited">

            </Tabs.Panel>
            </Tabs>
        </div>
    </div>
}

export default PostedJobDesc;