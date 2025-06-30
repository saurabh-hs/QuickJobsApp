import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";
import { formatDate } from "../Services/Utilities";

const ExpCard=(props:any)=> {
    const [edit, setEdit]=useState(false);
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
                {formatDate(props.startDate)} - {formatDate(props.endDate)}
            </div>
        </div>
        <div className="text-sm text-cloud-burst-900 text-justify">
            {props.description}
        </div>
        {props.edit&&<div className="flex gap-5">
            <Button onClick={()=> setEdit(true)} color="cloud-burst.8" variant="outline">Edit</Button>
            <Button color="red.8" variant="light">Delete</Button>
        </div>}
    </div>:<ExpInput setEdit={setEdit}/>
}

export default ExpCard;