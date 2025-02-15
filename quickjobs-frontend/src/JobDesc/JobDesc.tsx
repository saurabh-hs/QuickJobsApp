import { IconBookmark } from "@tabler/icons-react";
import logo from "../../public/Icons/Google.png"
import { ActionIcon, Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
//@ts-ignore
import DOMPurify from "dompurify";

const JobDesc=()=> {
    const data = DOMPurify.sanitize(desc);
    return <div className="">
        <div className='flex justify-between'>
            <div className="flex gap-2 items-center">
                <div className='p-3 bg-cloud-burst-200 rounded-xl'>
                    <img className="h-14" src={logo} alt="compay logo" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className='text-cloud-burst-900 font-semibold text-2xl text-start'>Software Engineer III</div>
                    <div className='text-lg text-cloud-burst-600'>Google &bull; 3 days ago &bull; 48 Applicants</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <Link to="/apply-job">
                <Button color="cloud-burst.9" size="sm" variant="light">Apply</Button>
                </Link>
                <IconBookmark className='text-cloud-burst-600 cursor-pointer' stroke={2} />
            </div>
        </div>
        <Divider my="xl"/>
        <div className="flex justify-between">
            {
                card.map((item: any, index: any) =>  <div key={index} className="flex flex-col items-center gap-1">
                <ActionIcon color="cloud-burst.8" className="!h-12 !w-12" variant="light" radius="xl" aria-label="Settings">
                <item.icon className="h-4/5 w-4/5" stroke={1.5} />
                </ActionIcon>
                <div className="text-sm text-cloud-burst-900">{item.name}</div>
                <div className="font-semibold text-cloud-burst-500">{item.value}</div>
            </div>)
            }
        </div>
        <Divider my="xl"/>
        <div className="flex flex-col items-start">
            <div className="text-xl font-semibold mb-5 text-cloud-burst-900">Required Skills</div>
            <div className="flex flex-wrap gap-2">
                {
                    skills.map((item, index) =>  <ActionIcon key={index} color="cloud-burst.9" className="!h-fit font-medium !text-sm !w-fit" p="xs" variant="light" radius="xl" aria-label="Settings">
                    {item}
                    </ActionIcon>)
                }
            </div>
        </div>
        <Divider my="xl"/>
        <div className="[&_h4]:text-xl [&_h4]:text-start [&_h4]:font-semibold [&_h4]:my-5 [&_h4]:text-cloud-burst-900 [&_*]:text-cloud-burst-500 [&_p]:text-justify [&_p]:text-start [&_li]:marker:text-cloud-burst-900 [&_li]:mb-1" dangerouslySetInnerHTML={{__html:data}}>
        </div>
        <Divider my="xl"/>
        <div>
            <div className="text-xl font-semibold mb-5 text-cloud-burst-900 text-start">About Company</div>
            <div className='flex justify-between mb-3'>
            <div className="flex gap-2 items-center">
                <div className='p-3 bg-cloud-burst-200 rounded-xl'>
                    <img className="h-8" src={logo} alt="compay logo" />
                </div>
                <div className="flex flex-col">
                    <div className='text-cloud-burst-900 font-medium text-lg text-start'>Google</div>
                    <div className='text-cloud-burst-600'>10K+ Employees</div>
                </div>
            </div>
                <Link to="/company">
                <Button color="cloud-burst.9" size="sm" variant="light">Company page</Button>
                </Link>
        </div>
        <div className="text-cloud-burst-400 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus voluptatibus repellat numquam cupiditate, odio sapiente, pariatur rerum reprehenderit dolores placeat similique ratione ipsum voluptatum illum quae facilis necessitatibus maxime animi optio cumque laboriosam. Aperiam nihil eligendi magnam! Maiores, tempore dolores.</div>
        </div>
    </div>
}

export default JobDesc;