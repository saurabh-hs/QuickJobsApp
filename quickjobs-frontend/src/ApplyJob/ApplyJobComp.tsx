import { Divider } from "@mantine/core";
import logo from "../../public/Icons/Google.png"
import ApplicationForm from "./ApplicationForm";

const ApplyJobComp=()=> {
    return <div className="w-2/3 mx-auto">
        
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
        </div>
        <Divider my="xl"/>
            <ApplicationForm />
        
    </div>
}

export default ApplyJobComp;