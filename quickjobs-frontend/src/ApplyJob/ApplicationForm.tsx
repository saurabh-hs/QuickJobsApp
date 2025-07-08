import { Button, FileInput, LoadingOverlay, NumberInput, TextInput, Textarea } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBase64 } from "../Services/Utilities";
import { applyJob } from "../Services/JobService";
import { errorNotification, successNotification } from "../Services/NotificationService";
import { useSelector } from "react-redux";

const ApplicationForm=()=>{
    const navigate = useNavigate();
    const {id} = useParams();
    const user=useSelector((state:any)=>state.user);
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const handlePreview =()=> {
        form.validate();
        window.scrollTo({top:0, behavior:'smooth'})
        if(!form.isValid()) return;
        setPreview(!preview);
    }

    const handleSubmit=async()=> {
        setSubmit(true);
        let resume:any=await getBase64(form.getValues().resume);
        let applicant={...form.getValues(), applicantId:user.id, resume:resume.split(',')[1]};
        applyJob(id, applicant).then(() => {
            setSubmit(false);
            successNotification("Success", "Application Submitted Successfully");
            navigate("/job-history");   
        }).catch((err) => {
            setSubmit(false);
            errorNotification("Error", err.response.data.errorMessage);
        })
    }
    const form = useForm({
        mode:'controlled',
        validateInputOnChange:true,
        initialValues:{
            name:'',
            email:'',
            phone:'',
            website:'',
            resume:null,
            coverLetter:''
        },
        validate:{
            name:isNotEmpty('Name is required'),
            email:isNotEmpty('Email is required'),
            phone:isNotEmpty('Phone Number is required'),
            website:isNotEmpty('Website is required'),
            resume:isNotEmpty('Resume is required')
        }
    });
    return <div>
        <LoadingOverlay className="!fixed"
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'cloud-burst.8', type: 'bars' }}
        />
        <div className="text-xl font-semibold text-cloud-burst-900 mb-5">Submit Your Application</div>
        <div className="text-left flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput {...form.getInputProps("name")} readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-cloud-burst-600 font-semibold":""}`} label="Full Name" withAsterisk placeholder="Enter name" />
                <TextInput {...form.getInputProps("email")} readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview? "text-cloud-burst-600 font-semibold":""}`} label="Email" withAsterisk placeholder="Enter email" />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <NumberInput {...form.getInputProps("phone")} readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview? "text-cloud-burst-600 font-semibold":""}`} label="Phone Numer" withAsterisk placeholder="Enter phone number" hideControls min={0} max={9999999999} clampBehavior="strict" />
                <TextInput {...form.getInputProps("website")} readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview? "text-cloud-burst-600 font-semibold":""}`} label="Personal Website" withAsterisk placeholder="Enter Url" />
            </div>
            <FileInput {...form.getInputProps("resume")} accept="application/pdf" readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview? "text-cloud-burst-600 font-semibold":""}`} withAsterisk leftSection={<IconPaperclip stroke={1.5} />} label="Attach your CV" placeholder="Your CV" leftSectionPointerEvents="none" />
            <Textarea {...form.getInputProps("coverLetter")} readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview? "text-cloud-burst-600 font-semibold":""}`} withAsterisk placeholder="Type something about yourself" label="Cover Letter" autosize minRows={4} />
            {!preview && <Button onClick={handlePreview} color="cloud-burst.9" variant="light">Preview</Button>}
            {
                preview && <div className="flex gap-10 [&>*]:w-1/2">
                    <Button fullWidth onClick={handlePreview} color="cloud-burst.9" variant="Outline">Edit</Button>
                    <Button fullWidth onClick={handleSubmit} color="cloud-burst.9" variant="light">Submit</Button>
                </div>
            }
        </div>
    </div>
}

export default ApplicationForm;