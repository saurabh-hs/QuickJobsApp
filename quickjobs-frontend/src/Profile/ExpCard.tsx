import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";
import { formatDate } from "../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { successNotification } from "../Services/NotificationService";

const ExpCard=(props:any)=> {
    const dispatch=useDispatch();
    const [edit, setEdit]=useState(false);
    const profile=useSelector((state:any)=>state.profile);
    const handleDelete=()=>{
        let exp=[...profile.experiences];
        exp.slice(props.index, 1);
        let updatedProfile={...profile, experiences:exp};
        dispatch(changeProfile(updatedProfile));
        successNotification("Experience Deleted", "Experience Delete Successfully")
    }
    return !edit?<div className="flex flex-col gap-2">
        <div className='flex justify-between'>
            <div className="flex gap-2 items-center">
                <div className='p-2 bg-cloud-burst-200 rounded-md'>
                    <img className="h-7" src={`../../public/Icons/${props.company}.png`} alt="compay logo" />
                </div>
                <div className="flex flex-col">
                    <div className='text-cloud-burst-900 text-950 font-semibold flex flex-start'>{props.title}</div>
                    <div className='text-sm text-cloud-burst-900'>{props.company} &bull; {props.location}</div>
                </div>
            </div>
            <div className="text-sm text-cloud-burst-900">
                {formatDate(props.startDate)} - {props.working?"Present":formatDate(props.endDate)}
            </div>
        </div>
        <div className="text-sm text-cloud-burst-900 text-justify">
            {props.description}
        </div>
        {props.edit&&<div className="flex gap-5">
            <Button onClick={()=> setEdit(true)} color="cloud-burst.8" variant="outline">Edit</Button>
            <Button onClick={handleDelete} color="red.8" variant="light">Delete</Button>
        </div>}
    </div>:<ExpInput {...props} setEdit={setEdit}/>
}

export default ExpCard;