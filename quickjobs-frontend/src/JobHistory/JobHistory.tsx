import { Tabs } from "@mantine/core";
import { jobList } from "../Data/JobsData";
import Card from "./Card";

const JobHistory=()=> {
    return <div className="">
        <div className="text-2xl font-semibold mb-5 text-cloud-burst-900">Job History</div>
        <div>
            <Tabs variant="outline" radius="lg" defaultValue="about">
            <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-cloud-burst-500 [&_button[data-active='false']]:text-cloud-burst-900">
            <Tabs.Tab value="applied">Applied</Tabs.Tab>
            <Tabs.Tab value="saved">Saved</Tabs.Tab>
            <Tabs.Tab value="offered">Offered</Tabs.Tab>
            <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="applied">
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
                {
                    jobList.map((job, index) => <Card key={index} {...job} applied />)
                }
            </div>
            </Tabs.Panel>
            <Tabs.Panel value="saved">
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
                {
                    jobList.map((job, index) => <Card key={index} {...job} saved />)
                }
            </div>
            </Tabs.Panel>
            <Tabs.Panel value="offered">
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
                {
                    jobList.map((job, index) => <Card key={index} {...job} offered />)
                }
            </div>
            </Tabs.Panel>
            <Tabs.Panel value="interviewing">
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
                {
                    jobList.map((job, index) => <Card key={index} {...job} interviewing />)
                }
            </div>
            </Tabs.Panel>
            </Tabs>
        </div>

    </div>
}

export default JobHistory;