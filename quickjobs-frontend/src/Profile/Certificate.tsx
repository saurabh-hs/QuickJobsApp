import { ActionIcon } from "@mantine/core";
import { IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import CertInput from "./CertInput";
import CertCard from "./CertCard";
import { useState } from "react";
import { useSelector } from "react-redux";

const Certificate=()=>{
    const [edit, setEdit] = useState(false);
    const [addCert, setAddCert]=useState(false);
    const profile=useSelector((state:any)=>state.profile);
    const handleClick=()=>{
        setEdit(!edit);
    }
    return <div className="px-3">
    <div className="text-2xl font-semibold mb-5 flex flex-start text-cloud-burst-700 justify-between">Certifications <div className="flex gap-2"><ActionIcon onClick={()=>setAddCert(true)} size="lg" color="cloud-burst.9" variant="subtle">
    <IconPlus className="h-4/5 w-4/5" />
    </ActionIcon><ActionIcon onClick={handleClick} size="lg" color={edit ? "red.8" : "cloud-burst.9"} variant="subtle">
        {edit ?<IconX className="h-4/5 w-4/5" />:<IconPencil className="h-4/5 w-4/5" />}
    </ActionIcon></div></div>
    <div className="flex flex-col gap-8">
        {
            profile?.certifications?.map((cert:any, index:number) => <CertCard key={index} index={index} edit={edit} {...cert} />)
        }
        {
            addCert&&<CertInput setEdit={setAddCert} />
        }
    </div>
</div>
}

export default Certificate;