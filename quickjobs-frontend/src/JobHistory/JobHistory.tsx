import { Tabs } from "@mantine/core";

const JobHistory=()=> {
    return <div className="">
        <div className="text-2xl font-semibold mb-5">Job History</div>
        <div>
            <Tabs variant="outline" radius="lg" defaultValue="about">
            <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-cloud-burst-600 [&_button[data-active='false']]:text-cloud-burst-900">
            <Tabs.Tab value="applied">Applied</Tabs.Tab>
            <Tabs.Tab value="saved">Saved</Tabs.Tab>
            <Tabs.Tab value="offered">Offered</Tabs.Tab>
            <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="applied">

            </Tabs.Panel>
            <Tabs.Panel value="saved">

            </Tabs.Panel>
            <Tabs.Panel value="offered">

            </Tabs.Panel>
            <Tabs.Panel value="interviewing">

            </Tabs.Panel>
            </Tabs>
        </div>

    </div>
}

export default JobHistory;