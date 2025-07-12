import { useState } from "react";
import fields from "../Data/Profile";
import { ActionIcon, NumberInput } from "@mantine/core";
import { IconBriefcase, IconCheck, IconMapPin, IconPencil, IconX } from "@tabler/icons-react";
import SelectInput from "./SelectInput";
import { useForm } from '@mantine/form';
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { successNotification } from "../Services/NotificationService";

const Info = () => {
  const select = fields;
  const dispatch=useDispatch();
  const user=useSelector((state:any)=>state.user);
  const profile=useSelector((state:any)=>state.profile);
  const [edit, setEdit] = useState(false);

  const handleClick = () => {
    if(!edit) {
        setEdit(true);
        form.setValues({jobTitle: profile.jobTitle, company: profile.company, location: profile.location, totalExp: profile.totalExp});
    }else setEdit(false);
  };

  const form = useForm({
    mode: 'controlled',
    initialValues: { jobTitle: '', company: '', location:'', totalExp: 1 },
  });

  const handleSave=()=>{
    setEdit(false);
    let updatedProfile={...profile, ...form.getValues()};
    dispatch(changeProfile(updatedProfile));
    successNotification("Profile Updated", "Profile Updated Successfully");
  }

  return (
    <>
      <div className="text-3xl font-semibold flex justify-between text-cloud-burst-700">
        {user.name} <div>
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
        </div>
      </div>

      {edit ? (
        <>
          <div className="flex gap-10 [&>*]:w-1/2 text-left">
            <SelectInput form={form} name="jobTitle" {...select[0]} />
            <SelectInput form={form} name="company" {...select[1]} />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2 text-left">
            <SelectInput form={form} name="location" {...select[2]} />
            <NumberInput label="Experience" withAsterisk hideControls clampBehavior="strict" min={1} max={50} name="totalExp" {...form.getInputProps('totalExp')} />
          </div>
        </>
      ) : (
        <>
          <div className="text-xl flex gap-1 items-center text-cloud-burst-700">
            <IconBriefcase className="h-5 w-5 text-cloud-burst-900" stroke={1.5} />
            {profile.jobTitle} &bull; {profile.company}
          </div>
          <div className="text-lg flex gap-1 items-center text-cloud-burst-700">
            <IconMapPin className="h-5 w-5 text-cloud-burst-900" stroke={1.5} />
            {profile.location}
          </div>
          <div className="text-lg flex gap-1 items-center text-cloud-burst-700">
            <IconBriefcase className="h-5 w-5 text-cloud-burst-900" stroke={1.5} />Experience: 
            {profile.totalExp} Years
          </div>
        </>
      )}
    </>
  );
};

export { Info };
