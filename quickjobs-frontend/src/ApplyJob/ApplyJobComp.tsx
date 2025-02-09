import { Divider, NumberInput, TextInput } from "@mantine/core";
import logo from "../../public/Icons/Google.png"

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
        <div className="text-xl font-semibold text-cloud-burst-900 mb-5">Submit Your Application</div>
        <div className="text-left">
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput label="Full Name" withAsterisk placeholder="Enter name" />
                <TextInput label="Email" withAsterisk placeholder="Enter email" />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <NumberInput label="Phone Numer" withAsterisk placeholder="Enter phone number" hideControls min={0} max={9999999999} clampBehavior="strict" />
                <TextInput label="Personal Website" withAsterisk placeholder="Enter Url" />
            </div>
        </div>
    </div>
}

export default ApplyJobComp;