import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
import { ActionIcon, Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { card } from "../Data/JobDescData";
//@ts-ignore
import DOMPurify from "dompurify";
import { timeAgo } from "../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { useEffect, useState } from "react";

const JobDesc=(props:any)=> {
    const dispatch = useDispatch();
    const profile = useSelector((state:any)=>state.profile);
    const [applied, setApplied]=useState(false);
    const data = DOMPurify.sanitize(props.description);
    const user = useSelector((state:any)=>state.user);
    const handleSaveJob=()=>{
        let savedJobs:any = [...profile.savedJobs];
        if(savedJobs?.includes(props.id)) {
            savedJobs=savedJobs?.filter((id:any)=>id!==props.id);
        }else{
            savedJobs=[...savedJobs, props.id];
        }
        let updatedProfile={...profile, savedJobs:savedJobs};
        dispatch(changeProfile(updatedProfile));
    }
    useEffect(()=>{
        if(props.applicant?.filter((applicant:any)=>applicant.applicantId==user.id).length>0){
            setApplied(true);
        }else setApplied(false);
    }, [props])
    return <div className="">
        <div className='flex justify-between'>
            <div className="flex gap-2 items-center">
                <div className='p-3 bg-cloud-burst-200 rounded-xl'>
                    <img className="h-14" src={`../../public/Icons/${props.company}.png`} alt="compay logo" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className='text-cloud-burst-900 font-semibold text-2xl text-start'>{props.jobTitle}</div>
                    <div className='text-lg text-cloud-burst-600'>{props.company} &bull; {timeAgo(props.postTime)} &bull; {props.applicants?props.applicants.length:0} Applicants</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                {props.edit || !applied && <Link to={`/apply-job/${props.id}`} >
                <Button color="cloud-burst.9" size="sm" variant="light">{props.edit?"Edit":"Apply"}</Button>
                </Link>}
                {
                   !props.edit && applied && <Button color="green.8" size="sm" variant="light">Applied</Button>   
                }
                {props.edit?<Button color="red.5" size="sm" variant="outline">Delete</Button>:profile.savedJobs?.includes(props.id)?<IconBookmarkFilled onClick={handleSaveJob} className='cursor-pointer text-cloud-burst-800' stroke={2} />:<IconBookmark onClick={handleSaveJob} className='text-cloud-burst-100 cursor-pointer hover:text-cloud-burst-800' stroke={2} />}
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
                <div className="font-semibold text-cloud-burst-500">{props?props[item.id]:"NA"} {item.id=="packageOffered" && <>LPA</>}</div>
            </div>)
            }
        </div>
        <Divider my="xl"/>
        <div className="flex flex-col items-start">
            <div className="text-xl font-semibold mb-5 text-cloud-burst-900">Required Skills</div>
            <div className="flex flex-wrap gap-2">
                {
                    props?.skillsReuired?.map((skill:any, index:number) =>  <ActionIcon key={index} color="cloud-burst.9" className="!h-fit font-medium !text-sm !w-fit" p="xs" variant="light" radius="xl" aria-label="Settings">
                    {skill}
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
                    <img className="h-8" src={`../../public/Icons/${props.company}.png`} alt="compay logo" />
                </div>
                <div className="flex flex-col">
                    <div className='text-cloud-burst-900 font-medium text-lg text-start'>{props.company}</div>
                    <div className='text-cloud-burst-600'>10K+ Employees</div>
                </div>
            </div>
                <Link to={`/company/${props.company}`}>
                <Button color="cloud-burst.9" size="sm" variant="light">Company page</Button>
                </Link>
        </div>
        <div className="text-cloud-burst-400 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus voluptatibus repellat numquam cupiditate, odio sapiente, pariatur rerum reprehenderit dolores placeat similique ratione ipsum voluptatum illum quae facilis necessitatibus maxime animi optio cumque laboriosam. Aperiam nihil eligendi magnam! Maiores, tempore dolores.</div>
        </div>
    </div>
}

export default JobDesc;