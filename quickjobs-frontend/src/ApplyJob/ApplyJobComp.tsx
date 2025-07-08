import { Divider } from "@mantine/core";
import ApplicationForm from "./ApplicationForm";
import { timeAgo } from "../Services/Utilities";

const ApplyJobComp=(props:any)=> {
    return <div className="w-2/3 mx-auto">
        
        <div className='flex justify-between'>
            <div className="flex gap-2 items-center">
                <div className='p-3 bg-cloud-burst-200 rounded-xl'>
                    <img className="h-14" src={`../../public/Icons/${props.company}.png`} alt="compay logo" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className='text-cloud-burst-900 font-semibold text-2xl text-start'>{props.jobTitle}</div>
                    <div className='text-lg text-cloud-burst-600'>{props.compay} &bull; {timeAgo(props.postTime)} &bull; {props.applicant?props.applicant.length:0} Applicants</div>
                </div>
            </div>
        </div>
        <Divider my="xl"/>
            <ApplicationForm />
        
    </div>
}

export default ApplyJobComp;