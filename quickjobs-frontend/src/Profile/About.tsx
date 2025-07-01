import { ActionIcon, Textarea } from "@mantine/core";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { successNotification } from "../Services/NotificationService";

const About = () => {
    const [edit, setEdit] = useState(false);
    const dispatch=useDispatch();
    const profile = useSelector((state: any) => state.profile);
    const [about, setAbout] = useState("");

    const handleClick = () => {
        if (!edit) {
            setEdit(true);
            setAbout(profile.about);
        } else setEdit(false);
    };

    const handleSave=()=>{
        setEdit(false);
        let updatedProfile={...profile, about:about};
        dispatch(changeProfile(updatedProfile));
        successNotification("Profile Updated", "About Updated Successfully");

    }
    return <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex flex-start text-cloud-burst-700 justify-between">About <div>
            {edit && <ActionIcon onClick={handleSave} size="lg" color="green.8" variant="subtle">
                <IconCheck className="h-4/5 w-4/5" />
            </ActionIcon>}
            <ActionIcon onClick={handleClick} size="lg" color={edit ? "red.8" : "cloud-burst.9"} variant="subtle">
                {edit ? (
                    <IconX className="h-4/5 w-4/5" />
                ) : (
                    <IconPencil className="h-4/5 w-4/5" />
                )}
            </ActionIcon>
        </div></div>
        {
            edit ? <Textarea value={about} placeholder="Enter about yourself..." autosize minRows={3} onChange={(event) => setAbout(event.currentTarget.value)} /> : <div className="text-sm text-cloud-burst-300 text-justify text-cloud-burst-400">{profile?.about}</div>
        }
    </div>
}

export default About;