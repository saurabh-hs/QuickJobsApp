import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import { content, fields } from "../Data/PostJob";
import SelectInput from "./SelectInput";
import TextEditor from "./TextEditor";
import { isNotEmpty, useForm } from "@mantine/form";
import { getJob, postJob } from "../Services/JobService";
import { errorNotification, successNotification } from "../Services/NotificationService";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const PostJob=(props:any)=> {
    const {id} = useParams();
    const [editorData, setEditorData]=useState(content);
    const user=useSelector((state:any)=>state.user);
    const select = fields;
    const navigate=useNavigate();
    useEffect(()=>{
        window.scrollTo(0, 0);
        if(id !== "0") {
            getJob(id).then((res)=>{
                form.setValues(res);
                setEditorData(res.description);
            }).catch((err)=>{
                console.log(err);
            })
        } else {
            form.reset();
            setEditorData(content);
        }
    }, [id])
    const form = useForm({
        mode:'controlled',
        validateInputOnChange:true,
        initialValues:{
            jobTitle:'',
            company:'',
            experience:'',
            jobType:'',
            location:'',
            packageOffered:'',
            skillsRequired:[],
            about:'',
            description:content
        },
        validate:{
            jobTitle:isNotEmpty('Title is required'),
            company:isNotEmpty('Company is required'),
            experience:isNotEmpty('Experience is required'),
            jobType:isNotEmpty('Job Type is required'),
            location:isNotEmpty('Location is required'),
            packageOffered:isNotEmpty('Package is required'),
            skillsRequired:isNotEmpty('Skills is required'),
            about:isNotEmpty('About is required'),
            description:isNotEmpty('Description is required')
        }
    });

    const handlePost=()=>{
        form.validate();
        if(!form.isValid()) return;
        postJob({...form.getValues(), id, postedBy:user.id, jobStatus:"ACTIVE"}).then((res) => {
            successNotification("Success", "Job Posted Successfully");
            navigate(`/posted-jobs/${res.id}`);
        }).catch((err) => {
            errorNotification("Error", err.response.data.errorMessage);
        })
    }

    const handleDraft=()=>{
        postJob({...form.getValues(), id, postedBy:user.id, jobStatus:"DRAFT"}).then((res) => {
            successNotification("Success", "Job Drafted Successfully");
            navigate(`/posted-jobs/${res.id}`);
        }).catch((err) => {
            errorNotification("Error", err.response.data.errorMessage);
        })
    }
    return (<div className="w-4/5 mx-auto">
        <div className="text-2xl font-semibold mb-5 flex items-start">Post a Job</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="jobTitle"  {...select[0]} />
                <SelectInput form={form} name="company" {...select[1]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="experience"  {...select[2]} />
                <SelectInput form={form} name="jobType" {...select[3]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="location"  {...select[4]} />
                <NumberInput {...form.getInputProps('packageOffered')} label="salary" withAsterisk min={1} max={300} clampBehavior="strict" placeholder="Enter Salary" hideControls />
            </div>
            <TagsInput {...form.getInputProps('skillsRequired')} className="text-start" withAsterisk label="Skills" placeholder="Enter Skill" splitChars={[',', ' ', '|']} clearable acceptValueOnBlur/>
            <Textarea {...form.getInputProps('about')} withAsterisk className="my-3" label="About Job" autosize minRows={2} placeholder="Enter about job..." />
            <div className="[&_button[data-active='true']]:!text-cloud-burst-50 [&_button[data-active='true']]:!bg-cloud-burst-950/80">
                <div className="text-sm font-medium text-start">Job Description <span className="text-red-500">*</span></div>
                <TextEditor form={form} data={editorData}/>
            </div>
            <div className="flex gap-4">
                <Button color="cloud-burst.9" onClick={handlePost} variant="light">Publish Job</Button>
                <Button color="cloud-burst.9" onClick={handleDraft} variant="outline">Save as Draft</Button>
            </div>
        </div>
    </div>
    )
}

export default PostJob; 