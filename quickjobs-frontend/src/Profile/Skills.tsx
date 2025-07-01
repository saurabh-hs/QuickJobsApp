import { ActionIcon, TagsInput } from "@mantine/core";
import { changeProfile } from "../Slices/ProfileSlice";
import { successNotification } from "../Services/NotificationService";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Skills=()=>{
    const [edit, setEdit] = useState(false);
    const dispatch=useDispatch();
    const profile = useSelector((state: any) => state.profile);
    const [skills, setSkills] = useState<string[]>([]);

    const handleClick = () => {
        if (!edit) {
            setEdit(true);
            setSkills(profile.skills);
        } else setEdit(false);
    };

    const handleSave=()=>{
        setEdit(false);
        let updatedProfile={...profile, skills:skills};
        dispatch(changeProfile(updatedProfile));
        successNotification("Profile Updated", "Skills Updated Successfully");

    }
    return <div className="px-3">
    <div className="text-2xl font-semibold mb-3 flex flex-start text-cloud-burst-700 justify-between">Skills <div>
        {edit && <ActionIcon onClick={handleSave} size="lg" color="green.8" variant="subtle">
            <IconCheck className="h-4/5 w-4/5" />
        </ActionIcon>}
        <ActionIcon onClick={handleClick} size="lg" color={edit?"red.8":"cloud-burst.9"} variant="subtle">
          {edit ? (
            <IconX className="h-4/5 w-4/5" />
          ) : (
            <IconPencil className="h-4/5 w-4/5" />
          )}
        </ActionIcon>
        </div></div>
    {
        edit ? <TagsInput value={skills} onChange={setSkills} placeholder="Add Skill" splitChars={[',',' ','|']} /> : <div className="flex flex-wrap gap-2">
        {
            profile?.skills?.map((skill:any, index:number)=> <div key={index} className="bg-cloud-burst-900 text-sm font-medium bg-opacity-80 rounded-3xl text-cloud-burst-50 px-3 py-1">{skill}</div>)
        }
    </div>
    }
</div>
}

export default Skills;