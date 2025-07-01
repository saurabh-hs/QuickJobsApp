import { ActionIcon } from "@mantine/core";
import { IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ExpCard from "./ExpCard";
import ExpInput from "./ExpInput";

const Experience=()=>{
    const profile = useSelector((state: any) => state.profile);
    const [edit, setEdit] = useState(false);
    const [addExp, setAddExp] = useState(false);
    const handleClick=()=>{
        setEdit(!edit);
    }
    return <div className="px-3">
    <div className="text-2xl font-semibold mb-5 flex flex-start text-cloud-burst-700 justify-between">Experience <div className="flex gap-2"><ActionIcon onClick={()=>setAddExp(true)} size="lg" color="cloud-burst.9" variant="subtle">
    <IconPlus className="h-4/5 w-4/5" />
    </ActionIcon><ActionIcon onClick={handleClick} size="lg" color={edit ? "red.8" : "cloud-burst.9"} variant="subtle">
        {edit?<IconX className="h-4/5 w-4/5" />:<IconPencil className="h-4/5 w-4/5" />}
    </ActionIcon></div></div>
    <div className="flex flex-col gap-8">
        {
            profile?.experiences?.map((exp:any, index:any) =>  <ExpCard key={index} index={index} {...exp} edit={edit} />)
        }
        {addExp&&<ExpInput add setEdit={setAddExp} />}
    </div>
</div>
}

export default Experience;