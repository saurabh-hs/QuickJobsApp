import { Button, TextInput } from "@mantine/core";
import fields from "../Data/Profile";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { successNotification } from "../Services/NotificationService";

const CertInput=(props:any)=>{
    const dispatch=useDispatch();
    const profile = useSelector((state: any) => state.profile);
    const select = fields;
    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            name:'',
            issuer:'',
            issueDate: new Date(),
            certificateId:''
        },
        validate:{
            name:isNotEmpty("Name is required"),
            issuer:isNotEmpty("Issuer is required"),
            issueDate:isNotEmpty("Issue Date is required"),
            certificateId:isNotEmpty("Certificate ID is required"),
        }
    });

    const handleSave=()=>{
        form.validate();
        if(!form.isValid())return;
        let certi=[...profile.certifications];
        certi.push(form.getValues());
        certi[certi.length-1].issueDate=certi[certi.length-1].issueDate.toISOString();
        let updatedProfile={...profile, Certificate:certi};
        props.setEdit(false);
        dispatch(changeProfile(updatedProfile));
        successNotification("Profile Updated", "Certificate added successfully");
    }
    return <div className="flex flex-col gap-3 text-left">
        <div className="text-lg font-semibold">Add Certificate</div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput {...form.getInputProps("name")} label="Title" withAsterisk placeholder="Enter title" />
            <SelectInput form={form} name="issuer" {...select[1]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput {...form.getInputProps("issueDate")} withAsterisk maxDate={new Date()} label="Issue Date" placeholder="Pick date" />
            <TextInput {...form.getInputProps("certificateId")} label="Certificate ID" withAsterisk placeholder="Enter ID" />
        </div>
        <div className="flex gap-5">
        <Button onClick={handleSave} color="green.8" variant="light">Save</Button>
        <Button color="red.8" onClick={()=>props.setEdit(false)} variant="light">Cancel</Button>
        </div>
    </div>
}

export default CertInput;