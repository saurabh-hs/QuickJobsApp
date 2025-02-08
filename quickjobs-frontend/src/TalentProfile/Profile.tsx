import { Button, Divider } from "@mantine/core";
import avatar from "../assets/profileavatar.png";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertCard from "./CertCard";

const Profile=(props:any)=> {
    return <div className="w-2/3">
        <div className="relative">
            <img className="rounded-t-2xl" src="../../public/Profile/banner.jpg" alt="" />
            <img className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-cloud-burst-50 border-8" src={avatar} alt="" />
        </div>
        <div className="px-3 mt-16">
            <div className="text-3xl font-semibold flex justify-between text-cloud-burst-700">{props.name} <Button color="cloud-burst.8" variant="light">Message</Button></div>
            <div className="text-xl flex gap-1 items-center text-cloud-burst-700"><IconBriefcase className='h-5 w-5 text-cloud-burst-900' stroke={1.5} />{props.role} &bull; {props.company}</div>
            <div className="text-lg flex gap-1 items-center text-cloud-burst-700">
                <IconMapPin className='h-5 w-5 text-cloud-burst-900' stroke={1.5} />{props.location}
            </div>
        </div>
        <Divider mx="xs" my="xl"/>
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3 flex flex-start text-cloud-burst-700">About</div>
            <div className="text-sm text-cloud-burst-300 text-justify text-cloud-burst-400">{props.about}</div>
        </div>
        <Divider mx="xs" my="xl"/>
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3 flex flex-start text-cloud-burst-700">Skills</div>
            <div className="flex flex-wrap gap-2">
                {
                    props.skills.map((skill:any, index:any)=> <div key={index} className="bg-cloud-burst-900 text-sm font-medium bg-opacity-80 rounded-3xl text-cloud-burst-50 px-3 py-1">{skill}</div>)
                }
            </div>
        </div>
        <Divider mx="xs" my="xl"/>
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5 flex flex-start text-cloud-burst-700">Experience</div>
            <div className="flex flex-col gap-8">
                {
                    props.experience.map((exp:any, index:any) =>  <ExpCard key={index} {...exp} />)
                }
            </div>
        </div>
        <Divider mx="xs" my="xl"/>
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5 flex flex-start text-cloud-burst-700">Certifications</div>
            <div className="flex flex-col gap-8">
                {
                    props.certifications.map((cert:any, index:any) =>  <CertCard key={index} {...cert} />)
                }
            </div>
        </div>
    </div>
}

export default Profile;