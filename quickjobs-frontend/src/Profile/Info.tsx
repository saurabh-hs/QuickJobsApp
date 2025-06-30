import { useState } from "react";
import fields from "../Data/Profile";
import { ActionIcon } from "@mantine/core";
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil } from "@tabler/icons-react";
import SelectInput from "./SelectInput";
import { useForm } from '@mantine/form';

const Info = () => {
  const select = fields;
  const [edit, setEdit] = useState(false);

  const handleClick = () => {
    if(!edit) {
        setEdit(true);
    }else{
        setEdit(false);
        console.log(form.getValues());
    }
  };

  const form = useForm({
    mode: 'controlled',
    initialValues: { jobTitle: '', company: '', location:'' },
  });

  return (
    <>
      <div className="text-3xl font-semibold flex justify-between text-cloud-burst-700">
        Saurabh Shinde
        <ActionIcon onClick={handleClick} size="lg" color="cloud-burst.9" variant="subtle">
          {edit ? (
            <IconDeviceFloppy className="h-4/5 w-4/5" />
          ) : (
            <IconPencil className="h-4/5 w-4/5" />
          )}
        </ActionIcon>
      </div>

      {edit ? (
        <>
          <div className="flex gap-10 [&>*]:w-1/2 text-left">
            <SelectInput {...select[0]} />
            <SelectInput {...select[1]} />
          </div>
          <div className="text-left">
            <SelectInput {...select[2]} />
          </div>
        </>
      ) : (
        <>
          <div className="text-xl flex gap-1 items-center text-cloud-burst-700">
            <IconBriefcase className="h-5 w-5 text-cloud-burst-900" stroke={1.5} />
            Software Engineer &bull; Google
          </div>
          <div className="text-lg flex gap-1 items-center text-cloud-burst-700">
            <IconMapPin className="h-5 w-5 text-cloud-burst-900" stroke={1.5} />
            New York, United States
          </div>
        </>
      )}
    </>
  );
};

export { Info };
