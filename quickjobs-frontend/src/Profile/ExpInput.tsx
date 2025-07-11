import { useEffect } from "react";
import fields from "../Data/Profile"
import SelectInput from "./SelectInput";
import { Button, Checkbox, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { useDispatch, useSelector } from "react-redux";
import { isNotEmpty, useForm } from "@mantine/form";
import { changeProfile } from "../Slices/ProfileSlice";
import { successNotification } from "../Services/NotificationService";

const ExpInput=(props:any)=>{
    const dispatch=useDispatch();
    const select = fields;
    const profile = useSelector((state: any) => state.profile);
    useEffect(()=>{
        if(!props.add)form.setValues({title:props.title, company:props.company, location:props.location, description:props.description, startDate:new Date(props.startDate), endDate:new Date(props.endDate), working:props.working})
    }, [])
    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            title:'',
            company:'',
            location:'',
            description:'',
            startDate: new Date(),
            endDate: new Date(),
            working:false
        },
        validate:{
            title:isNotEmpty("Title is required"),
            company:isNotEmpty("Company is required"),
            location:isNotEmpty("Location is required"),
            description:isNotEmpty("Description is required"),
        }
    });

    const handleSave=()=>{
        form.validate();
        if(!form.isValid()) return;
        let exp=[...profile.experiences];
        if(props.add){
            exp.push(form.getValues());
            exp[exp.length-1].startDate=exp[exp.length-1].startDate.toISOString();
            exp[exp.length-1].endDate=exp[exp.length-1].endDate.toISOString();
        }
        else {
            exp[props.index]=form.getValues();
            exp[exp.length-1].startDate=exp[exp.length-1].startDate.toISOString();
            exp[exp.length-1].endDate=exp[exp.length-1].endDate.toISOString();
        }
        let updatedProfile={...profile, experiences:exp};
        props.setEdit(false);
        dispatch(changeProfile(updatedProfile));
        successNotification("Profile Updated", `Experience ${props.add?"Added":"Updated"} Successfully`);
    }
    return <div className="flex flex-col gap-3 text-left">
        <div className="text-lg font-semibold">{props.add?"Add":"Edit"} Experience</div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput form={form} name="title" {...select[0]} />
            <SelectInput form={form} name="company" {...select[1]} />
        </div>
        <SelectInput form={form} name="location" {...select[2]} />
        <Textarea {...form.getInputProps('description')} withAsterisk label="Summary" placeholder="Enter job summary..." autosize minRows={3} />
        <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput {...form.getInputProps("startDate")} withAsterisk maxDate={form.getValues().endDate || undefined} label="Start Date" placeholder="Pick date" />
            <MonthPickerInput {...form.getInputProps("endDate")} disabled={form.getValues().working} withAsterisk minDate={form.getValues().startDate || undefined} maxDate={new Date()} label="End Date" placeholder="Pick date" />
        </div>
        <Checkbox checked={form.getValues().working} onChange={(event)=>form.setFieldValue("working", event.currentTarget.checked)} autoContrast label="Currently working here" />
        <div className="flex gap-5">
            <Button onClick={handleSave} color="green.8" variant="light">Save</Button>
            <Button onClick={()=> props.setEdit(false)} color="red.8" variant="light">Cancel</Button>
        </div>
    </div>
}

export default ExpInput;