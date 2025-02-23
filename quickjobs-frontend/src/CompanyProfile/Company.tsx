import { Avatar, Divider, Tabs } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import icon from "../../public/Icons/Google.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar from "../assets/profileavatar.png";
import AboutComp from "./AboutComp";

const Company=()=> {
    return <div className="w-3/4">
        <div className="relative">
            <img className="rounded-t-2xl" src="../../public/Profile/banner.jpg" alt="" />
            <img className="w-36 h-36 rounded-3xl -bottom-1/4 p-2 absolute left-5 border-cloud-burst-50 border-8 bg-cloud-burst-900" src={icon} alt="" />
        </div>
        <div className="px-3 mt-12">
            <div className="text-3xl font-semibold flex justify-between text-cloud-burst-700">Google<Avatar.Group>
                <Avatar src={avatar} />
                <Avatar src={avatar1} />
                <Avatar src={avatar2} />
                <Avatar>+10k</Avatar>
                </Avatar.Group></div>
            <div className="text-lg flex gap-1 items-center text-cloud-burst-700">
                <IconMapPin className='h-5 w-5 text-cloud-burst-900' stroke={1.5} />New York, United States
            </div>
        </div>
        <Divider mx="xs" my="xl"/>
        <div>
            <Tabs variant="outline" radius="lg" defaultValue="about">
            <Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:text-cloud-burst-600 [&_button[data-active='false']]:text-cloud-burst-900">
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
            <Tabs.Tab value="employees">Employees</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="about"><AboutComp /></Tabs.Panel>
            <Tabs.Panel value="jobs">Second panel</Tabs.Panel>
            <Tabs.Panel value="employees">Second panel</Tabs.Panel>
            </Tabs>
        </div>
    </div>
}

export default Company;