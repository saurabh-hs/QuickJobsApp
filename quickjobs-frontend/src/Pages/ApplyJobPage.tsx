import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";
import { useEffect, useState } from "react";
import { getJob } from "../Services/JobService";

const ApplyJobPage=()=> {
    const navigate=useNavigate();
    const {id} = useParams();
    const [job, setJob]=useState<any>(null);
    useEffect(()=>{
        window.scrollTo(0,0);
        getJob(id).then((res)=>{
            setJob(res);
        }).catch((err)=>{
            console.log(err);
        })
    },[id])
    return( <div className="min-h-[90vh] bg-cloud-burst-50 font-['Poppins'] p-4">
         <div className="flex flex-col gap-2">
                <Button my="md" leftSection={<IconArrowLeft size={20} />} onClick={()=>navigate(-1)} color="cloud-burst.9" variant="light">
                    Back
                </Button>
            <ApplyJobComp {...job} />
            </div>
    </div>
    )
};

export default ApplyJobPage;