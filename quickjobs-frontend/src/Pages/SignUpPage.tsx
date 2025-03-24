import { Divider } from "@mantine/core";
import { IconWorldDownload } from "@tabler/icons-react";
import SignUp from "../SignUpLogin/SignUp";

const SignUpPage=()=> {
    return( <div className="min-h-[90vh] bg-cloud-burst-50 font-['Poppins'] p-4">
        <div className="w-[100vw] h-[100vh] flex">
            <div className="w-1/2 h-full rounded-r-[200px] bg-cloud-burst-100 flex flex-col items-center gap-5 justify-center">
                <div className="flex gap-1 items-center">
                    <IconWorldDownload className="h-16 w-16 text-cloud-burst-900" stroke={2} />
                <div className="text-6xl font-semibold text-cloud-burst-900">QuickJobs</div>
                </div>
                <div className="text-2xl text-cloud-burst-500">Find the job made for you</div>
            </div>
            <SignUp />
        </div>
        </div>
    )
};

export default SignUpPage;