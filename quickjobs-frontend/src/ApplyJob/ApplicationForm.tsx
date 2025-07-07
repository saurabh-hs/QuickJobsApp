import { Button, FileInput, LoadingOverlay, NumberInput, TextInput, Textarea } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";

const ApplicationForm=()=>{
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const handlePreview =()=> {
        form.validate();
        window.scrollTo({top:0, behavior:'smooth'})
        if(!form.isValid()) return;
        setPreview(!preview);
    }

    const handleSubmit=()=> {
        setSubmit(true);
        
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