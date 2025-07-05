import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { formatDate } from "../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { successNotification } from "../Services/NotificationService";

const CertCard=(props:any)=> {
    const dispatch=useDispatch();
    const profile=useSelector((state:any)=>state.profile);
    const handleDelete=()=>{
        let certi=[...profile.certifications];
        certi.slice(props.index, 1);
        let updatedProfile={...profile, certifications:certi};
        dispatch(changeProfile(updatedProfile));
        successNotification("Profile Updated", "Certificate Delete Successfully")
    }
    return <div className='flex justify-between'>
            <div className="flex gap-2 items-center">
                <div className='p-2 bg-cloud-burst-200 rounded-md'>
                    <img className="h-7" src={`../../public/Icons/${props.issuer}.png`} alt="compay logo" />
                </div>
                <div className="flex flex-col items-start">
                    <div className='text-cloud-burst-900 text-950 font-semibold'>{props.name}</div>
                    <div className='text-sm text-cloud-burst-900'>{props.issuer}</div>
                </div>
            </div>
            <div className="flex items-center gap-2">
            <div className="flex flex-col items-end">
            <div className="text-sm text-cloud-burst-900">
                {formatDate(props.issueDate)}
            </div>
            <div className="text-sm text-cloud-burst-900">ID: {props.certificateId}</div>
            {props.edit&&<ActionIcon onClick={handleDelete} size="lg" color="red.8" variant="subtle">
                <IconTrash className="h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>}
            </div>
            </div>
        </div>
}

export default CertCard;