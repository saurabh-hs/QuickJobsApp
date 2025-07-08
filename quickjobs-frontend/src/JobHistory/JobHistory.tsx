import { Tabs } from "@mantine/core";
import Card from "./Card";
import { useEffect, useState } from "react";
import { getAllJobs } from "../Services/JobService";
import { useSelector } from "react-redux";

const JobHistory=()=> {
    const [activeTab, setActiveTab] = useState<any>('APPLIED');
    const user = useSelector((state:any)=>state.user);
    const [jobList, setJobList] = useState<any>([]);
    const [showList, setShowList] = useState<any>([]);
    const profile = useSelector((state:any) => state.profile);
    useEffect(()=>{
        getAllJobs().then((res) => {
            setJobList(res);
            setShowList(res.filter((job:any)=>{
                let found = false;
                job.applicants?.forEach((applicant:any)=>{
                    if(applicant.applicantId==user.id && applicant.applicationStatus=="APPLIED") {
                        found = true;
                    }
                })
                return found;
            }));
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const handleTabChange=(value:string | null)=>{
        setActiveTab(value);
        if(value=="SAVED") {
            setShowList(jobList.filter((job:any)=> profile.savedJobs?.includes(job.id)));
        }else{
            setShowList(jobList.filter((job:any)=>{
                let found = false;
                job.applicants?.forEach((applicant:any)=>{
                    if(applicant.applicantId==user.id && applicant.applicationStatus==value) {
                        found = true;
                    }
                })
                return found;
            }));
        }
    }
    return <div className="">
        <div className="text-2xl font-semibold mb-5 text-cloud-burst-900">Job History</div>
        <div>
            <Tabs variant="outline" radius="lg" value={activeTab} onChange={handleTabChange}>
            <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-cloud-burst-500 [&_button[data-active='false']]:text-cloud-burst-900">
            <Tabs.Tab value="APPLIED">Applied</Tabs.Tab>
            <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
            <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
            <Tabs.Tab value="INTERVIEWING">Interviewing</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value={activeTab}>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
                {
                    showList.map((job:any, index:any) => <Card key={index} {...job} {...{[activeTab.toLowerCase()]:true}} />)
                }
            </div>
            </Tabs.Panel>
            {/* <Tabs.Panel value="saved">
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
                {
                    jobList.map((job:any, index:any) => <Card key={index} {...job} saved />)
                }
            </div>
            </Tabs.Panel>
            <Tabs.Panel value="offered">
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
                {
                    jobList.map((job:any, index:any) => <Card key={index} {...job} offered />)
                }
            </div>
            </Tabs.Panel>
            <Tabs.Panel value="interviewing">
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
                {
                    jobList.map((job:any, index:any) => <Card key={index} {...job} interviewing />)
                }
            </div>
            </Tabs.Panel> */}
            </Tabs>
        </div>

    </div>
}

export default JobHistory;