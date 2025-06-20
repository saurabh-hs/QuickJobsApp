import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import avatar from "../assets/profileavatar.png";
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertCard from "./CertCard";
import { useState } from "react";
import fields from "../Data/Profile";
import SelectInput from "./SelectInput";
import ExpInput from "./ExpInput";
import CertInput from "./CertInput";

const Profile=(props:any)=> {
    const select=fields;
    const [edit, setEdit]=useState([false, false, false, false, false])
    const [addExp, setAddExp] = useState(false);
    const [addCert, setAddCert] = useState(false);
    const [about, setAbout]=useState(`${props.about}`);
    const [skills, setSkills]=useState(["HTML","CSS","JavaScript","React","Angular","Node.js","Python","Java","Ruby","PHP","SQL","MongoDB","PostgreSQL","Git","API Development","Testing and Debugging","Agile Methodologies","DevOps","AWS","Azure","Google Cloud"]);
    const handleEdit=(index:any)=>{
        const newEdit=[...edit];
        newEdit[index]=!newEdit[index];
        setEdit(newEdit);
    }
    return <div className="w-4/5 mx-auto">
        <div className="relative">
            <img className="rounded-t-2xl" src="../../public/Profile/banner.jpg" alt="" />
            <img className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-cloud-burst-50 border-8" src={avatar} alt="" />
        </div>
        <div className="px-3 mt-16">
            <div className="text-3xl font-semibold flex justify-between text-cloud-burst-700">{props.name} <ActionIcon onClick={()=>handleEdit(0)} size="lg" color="cloud-burst.9" variant="subtle">
                {edit[0]?<IconDeviceFloppy className="h-4/5 w-4/5" />:<IconPencil className="h-4/5 w-4/5" />}
            </ActionIcon> </div>
            {
                edit[0]?<><div className="flex gap-10 [&>*]:w-1/2 text-left">
                <SelectInput  {...select[0]} />
                <SelectInput {...select[1]} />
            </div>
            <div className="text-left">
            <SelectInput {...select[2]} />
            </div> </>:<><div className="text-xl flex gap-1 items-center text-cloud-burst-700"><IconBriefcase className='h-5 w-5 text-cloud-burst-900' stroke={1.5} />{props.role} &bull; {props.company}</div>
            <div className="text-lg flex gap-1 items-center text-cloud-burst-700">
                <IconMapPin className='h-5 w-5 text-cloud-burst-900' stroke={1.5} />{props.location}
            </div></>
            }
        </div>
        <Divider mx="xs" my="xl"/>
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3 flex flex-start text-cloud-burst-700 justify-between">About <ActionIcon onClick={()=>handleEdit(1)} size="lg" color="cloud-burst.9" variant="subtle">
                {edit[1]?<IconDeviceFloppy className="h-4/5 w-4/5" />:<IconPencil className="h-4/5 w-4/5" />}
            </ActionIcon></div>
            {
                edit[1] ?   <Textarea value={about} placeholder="Enter about yourself..." autosize minRows={3} onChange={(event) => setAbout(event.currentTarget.value)} /> : <div className="text-sm text-cloud-burst-300 text-justify text-cloud-burst-400">{about}</div>
            }
        </div>
        <Divider mx="xs" my="xl"/>
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3 flex flex-start text-cloud-burst-700 justify-between">Skills <ActionIcon onClick={()=>handleEdit(2)} size="lg" color="cloud-burst.9" variant="subtle">
                {edit[2]?<IconDeviceFloppy className="h-4/5 w-4/5" />:<IconPencil className="h-4/5 w-4/5" />}
            </ActionIcon></div>
            {
                edit[2] ? <TagsInput value={skills} onChange={setSkills} placeholder="Add Skill" splitChars={[',',' ','|']} /> : <div className="flex flex-wrap gap-2">
                {
                    props.skills.map((skill:any, index:any)=> <div key={index} className="bg-cloud-burst-900 text-sm font-medium bg-opacity-80 rounded-3xl text-cloud-burst-50 px-3 py-1">{skill}</div>)
                }
            </div>
            }
        </div>
        <Divider mx="xs" my="xl"/>
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5 flex flex-start text-cloud-burst-700 justify-between">Experience <div className="flex gap-2"><ActionIcon onClick={()=>setAddExp(true)} size="lg" color="cloud-burst.9" variant="subtle">
            <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon><ActionIcon onClick={()=>handleEdit(3)} size="lg" color="cloud-burst.9" variant="subtle">
                {edit[3]?<IconDeviceFloppy className="h-4/5 w-4/5" />:<IconPencil className="h-4/5 w-4/5" />}
            </ActionIcon></div></div>
            <div className="flex flex-col gap-8">
                {
                    props.experience.map((exp:any, index:any) =>  <ExpCard key={index} {...exp} edit={edit[3]} />)
                }
                {addExp&&<ExpInput add setEdit={setAddExp} />}
            </div>
        </div>
        <Divider mx="xs" my="xl"/>
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5 flex flex-start text-cloud-burst-700 justify-between">Certifications <div className="flex gap-2"><ActionIcon onClick={()=>setAddCert(true)} size="lg" color="cloud-burst.9" variant="subtle">
            <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon><ActionIcon onClick={()=>handleEdit(4)} size="lg" color="cloud-burst.9" variant="subtle">
                {edit[4]?<IconDeviceFloppy className="h-4/5 w-4/5" />:<IconPencil className="h-4/5 w-4/5" />}
            </ActionIcon></div></div>
            <div className="flex flex-col gap-8">
                {
                    props.certifications.map((cert:any, index:any) =>  <CertCard key={index} edit={edit[4]} {...cert} />)
                }
                {
                    addCert&&<CertInput setEdit={setAddCert} />
                }
            </div>
        </div>
    </div>
}

export default Profile;