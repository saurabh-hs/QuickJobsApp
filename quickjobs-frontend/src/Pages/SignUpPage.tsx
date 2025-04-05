import { IconWorldDownload } from "@tabler/icons-react";
import SignUp from "../SignUpLogin/SignUp";
import Login from "../SignUpLogin/Login";
import { useLocation } from "react-router-dom";

const SignUpPage=()=> {
    const location=useLocation();
    return <div className="min-h-[90vh] bg-cloud-burst-50 font-['Poppins'] p-4 overflow-hidden">
        <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname=='/signup'?'-translate-x-1/3':'translate-x-0'}`}>
            <Login />
            <div className={`w-1/2 h-full transition-all ease-in-out duration-1000 ${location.pathname=="/signup"?"rounded-r-[200px]":"rounded-l-[200px]"} bg-cloud-burst-100 flex flex-col items-center gap-5 justify-center`}>
                <div className="flex gap-1 items-center">
                    <IconWorldDownload className="h-16 w-16 text-cloud-burst-900" stroke={2} />
                <div className="text-6xl font-semibold text-cloud-burst-900">QuickJobs</div>
                </div>
                <div className="text-2xl text-cloud-burst-500">Find the job made for you</div>
            </div>
            <SignUp />
        </div>
        </div>
};

export default SignUpPage;