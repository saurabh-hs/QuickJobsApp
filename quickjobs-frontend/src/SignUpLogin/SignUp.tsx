import { Anchor, Button, Checkbox, Group, LoadingOverlay, PasswordInput, Radio, TextInput, rem } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Services/UserService";
import { signupValidation } from "../Services/FormValidation";
import { notifications } from "@mantine/notifications";
const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT",
}

const SignUp = () => {
    const [data, setData] = useState<{[key:string]: string}>(form);
    const [formError, setFormError]=useState<{[key:string]: string}>(form);
    const navigate=useNavigate();
    const [loading, setLoading] = useState(false);
    const handleChange = (event: any) => {
        if (typeof (event) == "string") {
            setData({ ...data, accountType: event });
            return;
        }
        let name = event.target.name, value = event.target.value;
        setData({...data, [name]:value});
        setFormError({...formError, [name]:signupValidation(name, value)})
        if(name == "password" && data.confirmPassword !== ""){
            let err = "";
            if(data.confirmPassword !== value) err = "Password do not match.";
            setFormError({...formError, [name]: signupValidation(name, value), confirmPassword:err});
        }
        if(name==="confirmPassword") {
            if(data.password !== value) setFormError({...formError, [name]:"Password do not match."});
            else setFormError({...formError, confirmPassword: ""});
        }
    }
    
    const handleSubmit = () => {
        let valid = true, newFormError:{[key:string]:string}={};
        for(let key in data) {
            if(key === "accountType")continue;
            if(key !=="confirmPassword") newFormError[key]=signupValidation(key, data[key]);
            else if(data[key] !== data["password"]) newFormError[key]="Password do not match.";
            if(newFormError[key]) valid=false;
        }
        setFormError(newFormError);
        if(valid === true) {
            setLoading(true);
            registerUser(data).then((res) => {
                console.log(res);
                setData(form);
                notifications.show({
                    title: 'User Registered Successfully',
                    message: 'Redirecting to login page...',
                    withCloseButton: true,
                    icon: <IconCheck style={{width:"90%", height:"90%"}} />,
                    color: "teal",
                    withBorder: true,
                    className: "!border-green-500"
                })
                setTimeout(()=>{
                    setLoading(false);
                    navigate("/login");
                }, 2000)
            }).catch((err) => {
                setLoading(false);
                console.log(err);
                notifications.show({
                    title: 'User Registration Failed',
                    message: err.response.data.errorMessage,
                    withCloseButton: true,
                    icon: <IconX style={{width:"90%", height:"90%"}} />,
                    color: "red",
                    withBorder: true,
                    className: "!border-red-500"
                })
            });
            }
    }

    return <><LoadingOverlay
    visible={loading}
    zIndex={1000}
    className="translate-x-1/2"
    overlayProps={{ radius: 'sm', blur: 2 }}
    loaderProps={{ color: 'cloud-burst.8', type: 'bars' }}
  /> <div className="w-[30vw] px-20 text-left flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Created Account</div>
        <TextInput value={data.name} error={formError.name} name="name" onChange={handleChange} withAsterisk label="Full Name" placeholder="Your name" />
        <TextInput value={data.email} error={formError.email} name="email" onChange={handleChange} withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} label="Email" placeholder="Your email" />
        <PasswordInput value={data.password} error={formError.password} name="password" onChange={handleChange} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder="Password" />
        <PasswordInput value={data.confirmPassword} error={formError.confirmPassword} name="confirmPassword" onChange={handleChange} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Confirm Password" placeholder="Confirm Password" />
        <Radio.Group
            value={data.accountType}
            onChange={handleChange}
            label="Select your role"
            withAsterisk
        >
            <Group mt="xs">
                <div className="flex gap-4">
                    <Radio className="py-4 px-6 border hover:bg-cloud-burst-200 has-[:checked]:bg-cloud-burst-400/5 has-[:checked]:border-cloud-burst-700 border-cloud-burst-300 rounded-lg" value="APPLICANT" label="Applicant" />
                    <Radio className="py-4 px-6 border hover:bg-cloud-burst-200 has-[:checked]:bg-cloud-burst-400/5 has-[:checked]:border-cloud-burst-700 border-cloud-burst-300 rounded-lg" value="EMPLOYER" label="Empolyer" />
                </div>
            </Group>
        </Radio.Group>
        <Checkbox autoContrast label={<>I accept{' '}<Anchor>terms & conditions</Anchor></>} />
        <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">Sign Up</Button>
        <div className="mx-auto">Have an account? <span className="text-cloud-burst-600 hover:underline cursor-pointer" onClick={()=>{navigate("/login"); setFormError(form); setData(form)}}>Login</span></div>
    </div>
    </>
}

export default SignUp;